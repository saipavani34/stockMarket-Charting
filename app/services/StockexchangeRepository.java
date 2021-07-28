package services;

import com.google.inject.ImplementedBy;
import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPAStockexchangeRepository.class)
public interface StockexchangeRepository {

    CompletionStage<Stockexchange> add(Stockexchange stockexchange);


    //CompletionStage<String> editdetails(int Id,String Name,String TurnOver,String CEO,String BOD,String Sector,String Description,String IPO);


    CompletionStage<Stream<Stockexchange>> list();



}

