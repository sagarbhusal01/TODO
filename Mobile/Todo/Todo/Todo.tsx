import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "./Parts/Header";
import MappedTodoList from "./Parts/MappedTodoList";
import { GetAllTodos } from "./Functions/GetAllTodos";
import { TodoResponseType } from "./Types";
import { SetLocalURL } from "./Functions/LocalURL";
import { DeleteTodo } from "./Functions/DeleteTodo";
import { ToggleTodo } from "./Functions/ToggleTodo";
import { AddTodo } from "./Functions/AddTodo";
import AddTodoButton from "./Parts/AddTodoButton";
import { GlobalStyles } from "./Global";
import Overlay from "./Parts/Overlay";
import AddTodoOverlayContainer from "./Parts/AddTodoOverlayContainer";
import Setting from "./Parts/Setting";
// ===========================
// ===========================
const Todo = () => {
  // =================================
  const [TodoData, setTodoData] = useState<TodoResponseType[]>();
  const [ToggleOverlay, setToggleOverlay] = useState<Boolean>(false);
  const [ToggleSetting, setToggleSetting] = useState<Boolean>(false);
  // =================================

  useEffect(() => {
    HandleGetAllTodos();
  }, []);

  const HandleGetAllTodos = () => {
    GetAllTodos().then((res: TodoResponseType[]) => {
      setTodoData(res);
    });
  };

  const HandleDeleteButton = (id: number) => {
    DeleteTodo(id).then((res: TodoResponseType[]) => {
      setTodoData(res);
    });
  };

  const HandleToggleTodo = (id: number) => {
    ToggleTodo(id).then((res: TodoResponseType[]) => {
      setTodoData(res);
    });
  };

  const HandleAddTodo = (todo: string) => {
    AddTodo(todo).then((res: TodoResponseType[]) => {
      setTodoData(res);
      setToggleOverlay(false);
    });
  };

  const HandleLocalURL = async (URL: string) => {
    SetLocalURL(URL).then(() => {
      setToggleSetting(false);
      HandleGetAllTodos();
    });
  };

  return (
    <View style={GlobalStyles.Container}>
      <Header setToggleSetting={setToggleSetting} />
      <Overlay
        setToggle={setToggleSetting}
        Toggle={ToggleSetting}
        Children={<Setting HandleLocalURL={HandleLocalURL} />}
      />

      <MappedTodoList
        TodoData={TodoData}
        HandleDeleteButton={HandleDeleteButton}
        HandleToggleTodo={HandleToggleTodo}
      />

      <AddTodoButton setToggleOverlay={setToggleOverlay} />

      <Overlay
        setToggle={setToggleOverlay}
        Toggle={ToggleOverlay}
        Children={<AddTodoOverlayContainer HandleAddTodo={HandleAddTodo} />}
      />
    </View>
  );
};

export default Todo;
