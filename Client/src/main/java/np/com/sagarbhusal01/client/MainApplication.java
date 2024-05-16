package np.com.sagarbhusal01.client;

import javafx.application.Application;
import javafx.scene.image.Image;
import javafx.stage.Stage;

import java.io.IOException;
import java.util.Objects;

import static np.com.sagarbhusal01.client.SceneBinder.GotoHomePage;

public class MainApplication extends Application {

    static Stage stage;
    public static String URL ="http://localhost:";
    public static String ServerPort ="1917";


    @Override
    public void start(Stage ParentStage) throws IOException {

       stage=ParentStage;
       stage.getIcons().add(new Image(Objects.requireNonNull(MainApplication.class.getResourceAsStream("HomePage/Todo-Client.png"))));

        GotoHomePage();
    }
    @Override
    public void stop() {
        stage.close();
    }

    public static void main(String[] args) {

        launch();
    }
}