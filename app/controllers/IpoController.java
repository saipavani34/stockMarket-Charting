
package controllers;

import services.Ipo;
import services.IpoRepository;
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

public class IpoController extends Controller {

    private final FormFactory formFactory;
    private final IpoRepository ipoRepository;
    private final HttpExecutionContext ec;

    @Inject
    public IpoController(FormFactory formFactory, IpoRepository ipoRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.ipoRepository = ipoRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok();
    }

    public CompletionStage<Result> add() {

        Ipo ipo = Json.fromJson(request().body().asJson(), Ipo.class);

        return ipoRepository.addIpo(ipo).thenApplyAsync(p -> {

            return ok();
        }, ec.current());
    }
    public CompletionStage<Result> getIpo() {
        return ipoRepository.list1().thenApplyAsync(IpoStream -> {
            return ok(toJson(IpoStream.collect(Collectors.toList())));
        }, ec.current());
    }
    public CompletionStage<Result> editdet() {

        JsonNode j = request().body().asJson();
        int Id = Integer.parseInt(j.get("Id").asText());
        System.out.println(Id);
        return ipoRepository.edit(Id).thenApplyAsync(us->{

            String s="{ \"Id\":\""+us.id+"\",\"CompanyName\":\""+us.CompanyName+"\",\"StockExchange\":\""+us.StockExchange+"\",\"PricePerShare\":\""+us.PricePerShare+"\",\"TotalShares\":\""+us.TotalShares+"\",\"OpenDateTime\":\""+us.OpenDateTime+"\",\"Remarks\":\""+us.Remarks+"\"}";

            return ok(Json.parse(s));

        }).exceptionally(e->{return ok("Not a valid update");});

    }
    public CompletionStage<Result> editipo() {

        JsonNode j = request().body().asJson();
        String CompanyName = j.get("CompanyName").asText();
        String StockExchange = j.get("StockExchange").asText();
        int PricePerShare = Integer.parseInt(j.get("PricePerShare").asText());
        int TotalShares = Integer.parseInt(j.get("TotalShares").asText());
        String OpenDateTime = j.get("OpenDateTime").asText();
        String Remarks= j.get("Remarks").asText();
        int Id = Integer.parseInt(j.get("Id").asText());
        return ipoRepository.editdetails(Id,CompanyName,StockExchange,PricePerShare,TotalShares,OpenDateTime,Remarks).thenApplyAsync(us->{

            // String s="{\"id\":\""+us.id+"\",\"Email\":\""+us.Email+"\",\"Name\":\""+us.Name+"\"}";

            return ok("Edited");

        }).exceptionally(e->{
            // System.out.println(Email);
            return badRequest("Not a valid ipo details");});
    }
}
