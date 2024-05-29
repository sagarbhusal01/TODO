package np.com.sagarbhusal01.backend.Repositories;

import np.com.sagarbhusal01.backend.DataModels.TodoDataModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface TodoRepository  extends JpaRepository<TodoDataModel,Integer> {

    public abstract List<TodoDataModel> findByIscompletedTrue();
    public abstract List<TodoDataModel> findByIscompletedFalse();
}
