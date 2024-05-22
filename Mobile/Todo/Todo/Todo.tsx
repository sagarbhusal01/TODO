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
// ===========================
// ===========================
const Todo = () => {
  // =================================
  const [TodoData, setTodoData] = useState<TodoResponseType[]>();
  // =================================

  useEffect(() => {
    GetAllTodos().then((res: TodoResponseType[]) => {
      setTodoData(res);
    });
  }, []);

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
    });
  };

  return (
    <View style={GlobalStyles.Container}>
      <Header />
      <MappedTodoList
        TodoData={TodoData}
        HandleDeleteButton={HandleDeleteButton}
        HandleToggleTodo={HandleToggleTodo}
      />

      <AddTodoButton HandleAddTodo={HandleAddTodo} />
    </View>
  );
};

export default Todo;
