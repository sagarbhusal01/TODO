package np.com.sagarbhusal01.client;

import javafx.event.EventHandler;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.input.KeyCode;
import javafx.scene.input.KeyCodeCombination;
import javafx.scene.input.KeyCombination;
import javafx.scene.input.KeyEvent;

import java.io.IOException;
import java.util.Objects;

public class SceneBinder {

    private static final double Width=460;
    private static final double Height=400;

    public  static  void GotoHomePage() throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(MainApplication.class.getResource("HomePage/home-page.fxml"));
        Scene scene = new Scene(fxmlLoader.load(), Width, Height);
        //Handling Quit  keyboard shortcut
        scene.addEventFilter(KeyEvent.KEY_PRESSED, new EventHandler<KeyEvent>() {
            final KeyCombination QuitKeyComb = new KeyCodeCombination(KeyCode.W,
                    KeyCombination.CONTROL_DOWN);
            public void handle(KeyEvent ke) {
                if (QuitKeyComb.match(ke)) {
                    MainApplication.stage.close();
                    ke.consume();
                }
            }
        });

        scene.getStylesheets().add(Objects.requireNonNull(MainApplication.class.getResource("HomePage/HomePageStyle.css")).toExternalForm());
        MainApplication.stage.setTitle("TODO");
        MainApplication.stage.setScene(scene);
        MainApplication.stage.setResizable(false);
        MainApplication.stage.show();
    }

}
