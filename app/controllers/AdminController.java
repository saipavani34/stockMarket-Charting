package controllers;

import play.mvc.*;
import services.Admin;
import services.AdminRepository;
import play.data.FormFactory;
import play.libs.Json;
import play.libs.Json.*;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Result;
import com.fasterxml.jackson.databind.JsonNode;
import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import play.mvc.Http.*;

import static com.sun.corba.se.spi.presentation.rmi.StubAdapter.request;
import static play.libs.Json.toJson;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;



//import views.html.*;

public class AdminController extends Controller{

    private final FormFactory formFactory;
    private final AdminRepository adminRepository;
    private final HttpExecutionContext ec;

    @Inject
    public AdminController(FormFactory formFactory, AdminRepository adminRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.adminRepository = adminRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok();
    }

    public CompletionStage<Result> login() {
        //Http.RequestBody body = request.body();

        JsonNode j = request().body().asJson();
        //Http.Request request = Request();
        //JsonNode j = request.body().asJson();
        //JsonNode j = body.asJson();

        String Adminname = j.get("Adminname").asText();
        String Password = j.get("Password").asText();
        return adminRepository.login(Adminname,Password).thenApplyAsync(us->{

            String s="{\"Adminname\":\""+us.Adminname+"\",\"Password\":\""+us.Password+"\"}";

            return ok(Json.parse(s));

        }).exceptionally(e->{return badRequest("Not a valid user");});

    }



}