package np.com.sagarbhusal01.client.DataModels;

public class TodoDataModel {

    private int id;

    private String todo;

    private boolean iscompleted;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }

    public boolean isIscompleted() {
        return iscompleted;
    }

    public void setIscompleted(boolean iscompleted) {
        this.iscompleted = iscompleted;
    }

    @Override
    public String toString()
    {
        return this.getTodo();
    }

}
