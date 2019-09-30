package rest;

import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author asgerhs
 */

 class User {

        String name;

        public User(String name) {
            this.name = name;
        }
    }

@Path("users")
public class UserRessource {

   

    public static List<User> users = new ArrayList();
    public Gson gson = new Gson();

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllUsers() {
        return Response.ok(gson.toJson(users)).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUserById(@PathParam("id") int id) {
        return Response.ok(gson.toJson(users.get(id - 1))).build();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addUser(String user) {
        User newUser = gson.fromJson(user, User.class);
        users.add(newUser);
        return Response.ok(gson.toJson(newUser)).build();
    }

    @PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response editUser(@PathParam("id") int id, String user) {
        users.get(id - 1).name = gson.fromJson(user, User.class).name;
        return Response.ok(gson.toJson(users.get(id - 1))).build();

    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response removeUser(@PathParam("id") int id){
        String name = users.get(id -1).name;
        users.remove(id - 1);
        return Response.ok(gson.toJson("{\"Message\" : \"User: " + name  + " with id: " + id +"has been removed")).build();
    }
    
    


}
