package controllers;

import services.Stockexchange;
import services.StockexchangeRepository;
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

public class StockexchangeController extends Controller {

    private final FormFactory formFactory;
    private final StockexchangeRepository stockexchangeRepository;
    private final HttpExecutionContext ec;

    @Inject
    public StockexchangeController(FormFactory formFactory, StockexchangeRepository stockexchangeRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.stockexchangeRepository = stockexchangeRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok();
    }

    public CompletionStage<Result> addStockexchanges() {

        Stockexchange stockexchange= Json.fromJson(request().body().asJson(),Stockexchange.class);

        return stockexchangeRepository.add(stockexchange).thenApplyAsync(p -> {

            return ok();
        }, ec.current());
    }




    public CompletionStage<Result> getStockexchanges() {
        return stockexchangeRepository.list().thenApplyAsync(stockexchangeStream -> {
            return ok(toJson(stockexchangeStream.collect(Collectors.toList())));
        }, ec.current());
    }


}

