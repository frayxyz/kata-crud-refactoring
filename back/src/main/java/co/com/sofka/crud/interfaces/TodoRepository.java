package co.com.sofka.crud.interfaces;

import co.com.sofka.crud.models.Todo;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Long> {
}
