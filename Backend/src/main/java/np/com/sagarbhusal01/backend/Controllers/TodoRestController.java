package np.com.sagarbhusal01.backend.Controllers;

import np.com.sagarbhusal01.backend.DataModels.TodoDataModel;
import np.com.sagarbhusal01.backend.Repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TodoRestController {
    @Autowired
    TodoRepository todoRepository;


    @GetMapping("/getalltodo")
    public List<TodoDataModel> GetAllData()  {
        return todoRepository.findAll();
    }



    @PostMapping("/addtodo")
    public List<TodoDataModel> PostData(@RequestBody TodoDataModel t)  {
            todoRepository.save(t);
            return todoRepository.findAll();
    }


    @PutMapping("/togglecompleted/{id}")
    public List<TodoDataModel> ToggleCompletedTodo(@PathVariable("id") int id)  {

           Optional<TodoDataModel> t= todoRepository.findById(id);
           if (t.isPresent()) {
               t.ifPresent(ts ->
               {
                   ts.setIscompleted(!ts.isIscompleted());
                   todoRepository.save(ts);
               });
               return todoRepository.findAll();
           }
        return todoRepository.findAll();
    }


    @DeleteMapping("/deletetodo/{id}")
     public List<TodoDataModel> DeleteTodo(@PathVariable("id") int id)  {

            Optional<TodoDataModel> t= todoRepository.findById(id);
            if(t.isPresent())
            {
                todoRepository.deleteById(id);
                return todoRepository.findAll();
            }
            return todoRepository.findAll();
    }
}
