package co.com.sofka.crud.controllers;

import co.com.sofka.crud.models.TypeTodo;
import co.com.sofka.crud.services.TypeTodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TypeTodoController {

    @Autowired
    private TypeTodoService service2;

    @GetMapping(value = "api/typestodo")
    public Iterable<TypeTodo> getTypes(){
        return service2.list();
    }

}
