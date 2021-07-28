package services;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

@ImplementedBy(JPAIpoRepository.class)
public interface IpoRepository {
    CompletionStage<Ipo> addIpo(Ipo ipo);

    CompletionStage<Stream<Ipo>> list1();
    CompletionStage<Ipo> edit(int Id);
    CompletionStage<String> editdetails(int Id,String CompanyName,String StockExchange,int PricePerShare,int TotalShares,String OpenDateTime,String Remarks);
}
