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
public class JPAStockexchangeRepository implements StockexchangeRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAStockexchangeRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }

    @Override
    public CompletionStage<Stockexchange> add(Stockexchange stockexchange) {
        return supplyAsync(() -> wrap(em -> insert(em, stockexchange)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Stockexchange>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Stockexchange insert(EntityManager em, Stockexchange stockexchange) {
        em.persist(stockexchange);
        return stockexchange;
    }

    private Stream<Stockexchange> list(EntityManager em) {
        List<Stockexchange> stockexchange = em.createQuery("select p from Stockexchange p", Stockexchange.class).getResultList();
        return stockexchange.stream();
    }
}

