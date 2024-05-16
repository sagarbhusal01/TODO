package np.com.sagarbhusal01.backend.DataModels;


import jakarta.persistence.*;

@Entity(name = "all_todos")
@Table(name = "all_todos" )
public class TodoDataModel {

    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Id
    private int id;

    @Column(name = "todo",nullable = false)
    private String todo;

    @Column(name = "iscompleted",nullable = false)

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

    public void setIscompleted(boolean is_completed) {
        this.iscompleted = is_completed;
    }
}
