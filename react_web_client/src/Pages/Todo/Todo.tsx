import { useEffect, useState } from "react";
import "../../Styles/Todo/TodoStyles.css";
import { GetAllTodos } from "./Functions/GetAllTodos";
import Settings from "./Parts/Settings";
import TextField from "./Parts/TextField";
import TodoList from "./Parts/TodoList";
import { TodoResponseType } from "./Types";
import { DeleteTodo } from "./Functions/DeleteTodo";
import { ToggleTodo } from "./Functions/ToggleTodo";
import { AddTodo } from "./Functions/AddTodo";
import { SetLocalURL } from "./Functions/LocalURL";
export default function Todo() {
  const [Data, setData] = useState<TodoResponseType[]>([]);

  useEffect(() => {
    HandleGetAllData();
  }, []);

  //   ======================================
  //   ======================================
  //   ======================================
  const HandleGetAllData = () => {
    GetAllTodos().then((res: TodoResponseType[]) => {
      setData(res);
    });
  };

  const HandleDelete = (id: number) => {
    DeleteTodo(id).then((res: TodoResponseType[]) => {
      setData(res);
    });
  };

  const HandleToggleCompleted = (id: number) => {
    ToggleTodo(id).then((res: TodoResponseType[]) => {
      setData(res);
    });
  };

  const HandleAddTodo = (text: string) => {
    AddTodo(text).then((res: TodoResponseType[]) => {
      setData(res);
    });
  };

  const HandleSetting = (text: string) => {
    SetLocalURL(text);
    HandleGetAllData();
  };

  //   ======================================
  //   ======================================
  //   ======================================

  return (
    <>
      <Settings HandleSetting={HandleSetting} />
      <div id="Container">
        <TextField HandleAddTodo={HandleAddTodo} />
        <TodoList
          Data={Data}
          HandleToggleCompleted={HandleToggleCompleted}
          HandleDelete={HandleDelete}
        />
      </div>
    </>
  );
}
