package controllers;

import services.Company;
import services.CompanyRepository;
import play.data.FormFactory;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Controller;
import play.mvc.Result;
import com.fasterxml.jackson.databind.JsonNode;
import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import static play.libs.Json.toJson;
//import views.html.*;

public class CompanyController extends Controller {

    private final FormFactory formFactory;
    private final CompanyRepository companyRepository;
    private final HttpExecutionContext ec;

    @Inject
    public CompanyController(FormFactory formFactory, CompanyRepository companyRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.companyRepository = companyRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok();
    }

    public CompletionStage<Result> add() {

        Company company= Json.fromJson(request().body().asJson(),Company.class);

        return companyRepository.add(company).thenApplyAsync(p -> {

            return ok();
        }, ec.current());
    }


    public CompletionStage<Result> editdetails() {

        JsonNode j = request().body().asJson();
        String Name = j.get("Name").asText();
        String TurnOver = j.get("TurnOver").asText();
        String CEO = j.get("CEO").asText();
        String BOD = j.get("BOD").asText();
        String Sector = j.get("Sector").asText();
        String Description = j.get("Description").asText();
        String IPO= j.get("IPO").asText();
        int Id = Integer.parseInt(j.get("Id").asText());
        return companyRepository.editdetails(Id,Name,TurnOver,CEO,BOD,Sector,Description,IPO).thenApplyAsync(us->{

            // String s="{\"id\":\""+us.id+"\",\"Email\":\""+us.Email+"\",\"Name\":\""+us.Name+"\"}";

            return ok("Edited");

        }).exceptionally(e->{
           // System.out.println(Email);
            return badRequest("Not a valid company details");});
    }
    public CompletionStage<Result> getCompany() {
        return companyRepository.list().thenApplyAsync(CompanyStream -> {
            return ok(toJson(CompanyStream.collect(Collectors.toList())));
        }, ec.current());
    }

    public CompletionStage<Result> company() {

        JsonNode j = request().body().asJson();
        int Id = Integer.parseInt(j.get("Id").asText());
        System.out.println(Id);
        return companyRepository.company(Id).thenApplyAsync(us->{

            String s="{ \"Id\":\""+us.id+"\",\"Name\":\""+us.Name+"\",\"TurnOver\":\""+us.TurnOver+"\",\"CEO\":\""+us.CEO+"\",\"BOD\":\""+us.BOD+"\",\"Sector\":\""+us.Sector+"\",\"Description\":\""+us.Description+"\",\"IPO\":\""+us.BOD+"\"}";

            return ok(Json.parse(s));

        }).exceptionally(e->{return ok("Not a valid update");});

    }

}

