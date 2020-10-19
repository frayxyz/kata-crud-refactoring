package co.com.sofka.crud.services;
import co.com.sofka.crud.interfaces.TypeTodoRepository;
import co.com.sofka.crud.models.TypeTodo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TypeTodoService {

    @Autowired
    private TypeTodoRepository repository;

    public Iterable<TypeTodo> list(){
        return repository.findAll();
    }

}
