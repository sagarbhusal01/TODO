package np.com.sagarbhusal01.client.API;

import com.fasterxml.jackson.databind.ObjectMapper;
import np.com.sagarbhusal01.client.DataModels.TodoDataModel;
import np.com.sagarbhusal01.client.MainApplication;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class RestClient {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final String url = MainApplication.URL + MainApplication.ServerPort;


    public TodoDataModel[] GET(String MethodName) throws IOException, InterruptedException {
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url + "/" + MethodName))
                .build();

        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        String responseBody = response.body();

        return  (objectMapper.readValue(responseBody, TodoDataModel[].class));
    }


    public TodoDataModel[] POST(TodoDataModel Data, String MethodName) throws IOException, InterruptedException {
        HttpClient httpClient = HttpClient.newHttpClient();
        String json = objectMapper.writeValueAsString(Data);

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url + "/" + MethodName))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();

        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        String responseBody = response.body();

        return (objectMapper.readValue(responseBody, TodoDataModel[].class));
    }


    public TodoDataModel[] PUT(String MethodName) throws IOException, InterruptedException {
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url +"/"+ MethodName))
                .PUT(HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        String responseBody = response.body();

        return  (objectMapper.readValue(responseBody, TodoDataModel[].class));
    }


    public  TodoDataModel[] DELETE(String MethodName) throws IOException, InterruptedException {
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url + "/" + MethodName))
                .DELETE()
                .build();

        HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        String responseBody = response.body();
        return objectMapper.readValue(responseBody, TodoDataModel[].class);
    }


}
