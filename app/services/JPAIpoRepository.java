
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
public class JPAIpoRepository implements IpoRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAIpoRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    @Override
    public CompletionStage<Ipo> addIpo(Ipo ipo) {
        return supplyAsync(() -> wrap(em -> insert(em, ipo)), executionContext);
    }

    public CompletionStage<Ipo> edit(int Id) {
        return supplyAsync(() -> wrap(em -> edit(em, Id)), executionContext);
    }

    public CompletionStage<String> editdetails(int Id,String CompanyName,String StockExchange,int PricePerShare,int TotalShares,String OpenDateTime,String Remarks) {
        return supplyAsync(() -> wrap(em -> editdetails(em,Id,CompanyName,StockExchange,PricePerShare,TotalShares,OpenDateTime,Remarks)), executionContext);
    }

    public CompletionStage<Stream<Ipo>> list1() {
        return supplyAsync(() -> wrap(em -> list1(em)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Ipo insert(EntityManager em, Ipo ipo) {
        em.persist(ipo);
        return ipo;
    }

    private Stream<Ipo> list1(EntityManager em) {
        List<Ipo> ipo = em.createQuery("select p from Ipo p", Ipo.class).getResultList();
        return ipo.stream();
    }

    private String editdetails(EntityManager em,int Id,String CompanyName,String StockExchange,int PricePerShare,int TotalShares,String OpenDateTime,String Remarks)
    {
        int count = em.createQuery("Update Ipo set CompanyName =:CompanyName,StockExchange= :StockExchange, PricePerShare= :PricePerShare ,TotalShares= :TotalShares,OpenDateTime= :OpenDateTime ,Remarks= :Remarks where Id=:Id").setParameter("CompanyName",CompanyName).setParameter("StockExchange",StockExchange).setParameter("PricePerShare",PricePerShare).setParameter("TotalShares",TotalShares).setParameter("OpenDateTime",OpenDateTime).setParameter("Remarks",Remarks).setParameter("Id",Id).executeUpdate();


        if(count==0){
            return null;
        }
        else {
            return "OK";
        }
    }

    public Ipo edit(EntityManager em, int Id) throws NoResultException {
        try {
//            EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("");
//            EntityManager em= entityManagerFactory.createEntityManager();
//            em.getTransaction().begin();

            Ipo foundUser = em.createQuery("select p from Ipo p where Id=:Id ", Ipo.class).setParameter("Id", Id).getSingleResult();
            //em.remove(foundPerson);
            return foundUser;
        } catch (NoResultException e) {
            return null;
        }
    }
}
