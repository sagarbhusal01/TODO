package np.com.sagarbhusal01.client.HomePage;


import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.*;
import np.com.sagarbhusal01.client.API.API;
import np.com.sagarbhusal01.client.API.Network;

import np.com.sagarbhusal01.client.MainApplication;

import java.io.IOException;
import java.net.URL;
import java.util.*;



public class HomePageController implements Initializable {


    @FXML
    public TextField TodoTextField;

    @FXML
    public Button SeeCompletedTodos;
    @FXML
    public Label IPLabel;

    @FXML
    private ListView<String> TodoListView;

    API api=new API();

    int counter=0;


    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {

//        Right click to see option Mark as completed and Delete
        ListViewContextMenu();
//
//        getting all datas in the initial phase
        try {
            IPLabel.setText(new Network().GetIpAddress());
            api.getAllTodos();
        } catch (IOException | InterruptedException e) {
            IPLabel.setText("Server not found.");
            IPLabel.setStyle("-fx-text-fill: #fa6464;-fx-font-size: 12;");
        }
        TodoListView.setItems(api.ActiveList);
    }


    @FXML
    public void AddTodoButtonClicked() throws IOException, InterruptedException {

      if(!Objects.equals(TodoTextField.getText(), "")&&!Objects.equals(TodoTextField.getText().replaceAll(" ",""),""))
      {
         if(api.AllHashedTodos.get(TodoTextField.getText())==null)
         {
             api.AddTodo(TodoTextField.getText());
             UpdateActiveAndCompletedList();
             TodoTextField.setText("");
         }
      }
    }

    @FXML
    public void OnTextFieldEnterButtonPressed(ActionEvent event) throws IOException, InterruptedException {

        if(event.getEventType().toString()=="ACTION")
        {
            AddTodoButtonClicked();
        }


    }

    @FXML
    public void onSeeCompletedTodosbuttonPressed()
    {
        counter++;
        if(counter%2==0)
        {
            UpdateActiveAndCompletedList();
            SeeCompletedTodos.setText("Completed");
        }
        else
        {
            UpdateActiveAndCompletedList();
            SeeCompletedTodos.setText("Active");

        }
    }


    public void onMarkAsCompletedMenuPressed(ListCell<String> cell) throws IOException, InterruptedException {
        api.ToggleTodo(cell.getText());
        UpdateActiveAndCompletedList();
    }


    public void onDeleteMenuPressed(ListCell<String> cell) throws IOException, InterruptedException {
        api.RemoveTodo(cell.getText());
        UpdateActiveAndCompletedList();
    }


    public void onRefreshButtonPressed() {
        try {
            api.getAllTodos();
            UpdateActiveAndCompletedList();
            IPLabel.setText(new Network().GetIpAddress());
            IPLabel.setStyle(null);

        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }
    }


// All the utils are written below this line

    void UpdateActiveAndCompletedList()
    {
        if(counter%2==0)
        {
         TodoListView.setItems(api.ActiveList);
        }
        else
        {
            TodoListView.setItems(api.CompletedList);
        }
    }


    private void ListViewContextMenu()
    {
        TodoListView.setCellFactory( lv-> {

            ListCell<String> cell = new ListCell<>();
            ContextMenu contextMenu = new ContextMenu();
            contextMenu.setId("contextMenu");


            MenuItem MarkAsCompletedMenuItem = new MenuItem();
            MarkAsCompletedMenuItem.setText("Mark as Completed. ");
            MarkAsCompletedMenuItem.setStyle("-fx-text-fill: white;");


            MenuItem DeleteItemsMenuItem = new MenuItem();
            DeleteItemsMenuItem.setStyle("-fx-text-fill: white;");
            DeleteItemsMenuItem.setText("Delete. ");


            contextMenu.getItems().addAll(MarkAsCompletedMenuItem, DeleteItemsMenuItem);


            MarkAsCompletedMenuItem.setOnAction(event -> {
                try {
                    onMarkAsCompletedMenuPressed(cell);
                } catch (IOException | InterruptedException e) {
                    throw new RuntimeException(e);
                }
            });

            DeleteItemsMenuItem.setOnAction(event -> {
                try {
                    onDeleteMenuPressed(cell);
                } catch (IOException | InterruptedException e) {
                    throw new RuntimeException(e);
                }
            });



            cell.textProperty().bind(cell.itemProperty());
//            Checking for the Empty cell and Adding context menu into the Filled Cell
            cell.emptyProperty().addListener((obs, wasEmpty, isNowEmpty) -> {
                if (isNowEmpty) {
                    cell.setContextMenu(null);
                } else {
                    cell.setContextMenu(contextMenu);
                }
            });
            return cell ;
        });


    }
}






