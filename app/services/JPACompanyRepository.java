package services;

import play.db.jpa.JPAApi;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.xml.soap.Name;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;
import java.util.stream.Stream;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.lang.Exception;
import javax.persistence.NoResultException;
import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public class JPACompanyRepository implements CompanyRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPACompanyRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    @Override
    public CompletionStage<Company> add(Company company) {
        return supplyAsync(() -> wrap(em -> insert(em, company)), executionContext);
    }
    public CompletionStage<Company> company(int Id) {
        return supplyAsync(() -> wrap(em -> company(em, Id)), executionContext);
    }


    public CompletionStage<String> editdetails(int Id,String Name,String TurnOver,String CEO,String BOD,String Sector,String Description,String IPO) {
        return supplyAsync(() -> wrap(em -> editdetails(em,Id,Name,TurnOver,CEO,BOD,Sector,Description,IPO)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Company>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }



    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Company insert(EntityManager em, Company company) {
        em.persist(company);
        return company;
    }

    private String editdetails(EntityManager em,int Id,String Name,String TurnOver,String CEO,String BOD,String Sector,String Description,String IPO)
    {
        int count = em.createQuery("Update Company set Name =:Name,TurnOver= :TurnOver, CEO = :CEO ,BOD= :BOD ,Sector= :Sector ,Description= :Description , IPO= :IPO where Id=:Id").setParameter("Name",Name).setParameter("TurnOver",TurnOver).setParameter("CEO",CEO).setParameter("BOD",BOD).setParameter("Sector",Sector).setParameter("Description",Description).setParameter("IPO",IPO).setParameter("Id",Id).executeUpdate();


        if(count==0){
            return null;
        }
        else {
            return "OK";
        }
    }


    private Stream<Company> list(EntityManager em) {
        List<Company> companys = em.createQuery("select p from Company p", Company.class).getResultList();
       return companys.stream();
    }

    public Company company(EntityManager em,int Id) throws NoResultException {
        try{
//            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("");
//            EntityManager em= entityManagerFactory.createEntityManager();
//            em.getTransaction().begin();

            Company foundUser = em.createQuery("select p from Company p where Id=:Id ",Company.class).setParameter("Id", Id).getSingleResult();
            //em.remove(foundPerson);
            return foundUser;
        }
        catch(NoResultException e){
            return null;
        }


    }
}

