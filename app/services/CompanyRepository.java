
package services;

import com.google.inject.ImplementedBy;
import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPACompanyRepository.class)
public interface CompanyRepository {

    CompletionStage<Company> add(Company company);


    CompletionStage<String> editdetails(int Id,String Name,String TurnOver,String CEO,String BOD,String Sector,String Description,String IPO);


    CompletionStage<Stream<Company>> list();
    CompletionStage<Company> company(int Id);



}

