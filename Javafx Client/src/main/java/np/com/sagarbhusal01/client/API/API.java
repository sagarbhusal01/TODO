package np.com.sagarbhusal01.client.API;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import np.com.sagarbhusal01.client.DataModels.TodoDataModel;

import java.io.IOException;
import java.util.HashMap;

public class API {

    public ObservableList<String> CompletedList = FXCollections.observableArrayList();
    public ObservableList<String> ActiveList = FXCollections.observableArrayList();
    public  HashMap<String,Integer> AllHashedTodos =new HashMap<>();

    RestClient restClient =new RestClient();

    public void getAllTodos() throws IOException, InterruptedException {
        TodoDataModel[] t=restClient.GET("getalltodo");
        MapTodoData(t);
    }


    public void AddTodo(  String Text) throws IOException, InterruptedException {

        TodoDataModel todoDataModel =new TodoDataModel();
        todoDataModel.setTodo(Text);
        todoDataModel.setIscompleted(false);

        TodoDataModel[] t=restClient.POST(todoDataModel,"addtodo");
        MapTodoData(t);
    }


    public void ToggleTodo(String TodoText) throws IOException, InterruptedException {

        if(AllHashedTodos.containsKey(TodoText)){
            TodoDataModel[] t=restClient.PUT("togglecompleted"+"/"+ AllHashedTodos.get(TodoText));
            MapTodoData(t);
        }
        else
        {
            getAllTodos();
        }
    }


    public void RemoveTodo(String TodoText) throws IOException, InterruptedException {
        if(AllHashedTodos.containsKey(TodoText)) {
            TodoDataModel[] t=restClient.DELETE("deletetodo"+"/"+AllHashedTodos.get(TodoText));
            MapTodoData(t);
        }
        else
        {
            getAllTodos();
        }

    }

    private void MapTodoData(TodoDataModel[] t) {

        CompletedList.clear();
        ActiveList.clear();

        for (TodoDataModel td : t) {
            if (td.isIscompleted()) {
                CompletedList.add(td.getTodo());
            } else {
                ActiveList.add(td.getTodo());
            }
            AllHashedTodos.put(td.getTodo(), td.getId());
        }
    }


}
