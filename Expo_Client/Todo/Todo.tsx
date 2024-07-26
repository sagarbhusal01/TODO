import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  RefreshControl,
} from "react-native";
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
import Setting from "./Parts/Setting";
import { GetSavedTodo, SetSavedTodo } from "./Functions/SavedTodo";
import TextField from "./Parts/TextField";
// ===========================
// ===========================
const Todo = () => {
  // =================================
  const [TodoData, setTodoData] = useState<TodoResponseType[]>();
  const [ToggleSetting, setToggleSetting] = useState<Boolean>(false);
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

  const HandleLocalURL = async (URL: string) => {
    SetLocalURL(URL).then(() => {
      setToggleSetting(false);
      HandleGetAllTodos();
    });
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
      <Header setToggleSetting={setToggleSetting} />
      <Overlay
        setToggle={setToggleSetting}
        Toggle={ToggleSetting}
        Children={<Setting HandleLocalURL={HandleLocalURL} />}
      />
      <TextField HandleAddTodo={HandleAddTodo} />
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
