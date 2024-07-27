import { View, ToastAndroid } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "./Parts/Header";
import MappedTodoList from "./Parts/MappedTodoList";
import { GetAllTodos } from "../../Common/Functions/GetAllTodos";
import { TodoResponseType } from "../../Global/Types";
import { DeleteTodo } from "../../Common/Functions/DeleteTodo";
import { ToggleTodo } from "../../Common/Functions/ToggleTodo";
import { AddTodo } from "../../Common/Functions/AddTodo";
import { GlobalStyles } from "../../Global/CONSTANTS";
import { GetSavedTodo, SetSavedTodo } from "./Functions/SavedTodo";
import TextField from "../../Common/TextField/TextField";
// ===========================
// ===========================
const Todo = ({ navigation }: any) => {
  // =================================
  const [TodoData, setTodoData] = useState<TodoResponseType[]>();
  // =================================

  useEffect(() => {
    HandleGetAllTodos();
  }, []);

  const HandleGetAllTodos = () => {
    GetAllTodos()
      .then((res: TodoResponseType[]) => {
        setTodoData(res);
        SetSavedTodo(res);
      })
      .catch(async () => {
        ToastAndroid.show("Offline Mode", ToastAndroid.LONG);
        setTodoData(await GetSavedTodo());
      });
  };

  const HandleDeleteButton = (id: number) => {
    DeleteTodo(id).then((res: TodoResponseType[]) => {
      setTodoData(res);
      ToastAndroid.show("Deleted Sucessfully", ToastAndroid.LONG);
    });
  };

  const HandleToggleTodo = (id: number) => {
    ToggleTodo(id).then((res: TodoResponseType[]) => {
      setTodoData(res);
    });
  };

  const HandleAddTodo = (todo: string) => {
    if (todo.replaceAll(" ", "").length !== 0) {
      AddTodo(todo).then((res: TodoResponseType[]) => {
        setTodoData(res);
        ToastAndroid.show("Todo Added Sucessfully", ToastAndroid.LONG);
      });
    }
  };
  const HandleSettingButtonPressed = () => {
    navigation.navigate("Setting");
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const HandleRefresh = React.useCallback(() => {
    setRefreshing(true);
    HandleGetAllTodos();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View style={GlobalStyles.Container}>
      <Header HandleSettingButtonPressed={HandleSettingButtonPressed} />

      <TextField HandleEnter={HandleAddTodo} Title={"Do some Work Here."} />

      <MappedTodoList
        TodoData={TodoData}
        HandleDeleteButton={HandleDeleteButton}
        HandleToggleTodo={HandleToggleTodo}
        refreshing={refreshing}
        HandleRefresh={HandleRefresh}
      />
    </View>
  );
};

export default Todo;
