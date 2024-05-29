module np.com.sagarbhusal01.client {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.base;
    requires javafx.graphics;
    requires java.net.http;
    requires com.fasterxml.jackson.databind;
    requires java.desktop;

    exports np.com.sagarbhusal01.client;
    exports np.com.sagarbhusal01.client.API;
    exports np.com.sagarbhusal01.client.DataModels;
    exports np.com.sagarbhusal01.client.HomePage;

    opens np.com.sagarbhusal01.client.API to javafx.fxml;
    opens np.com.sagarbhusal01.client.HomePage to javafx.fxml;
    opens np.com.sagarbhusal01.client to javafx.fxml;

}