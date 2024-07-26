import AsyncStorage from "@react-native-async-storage/async-storage";
import { TodoResponseType } from "../Types";

export const GetSavedTodo = async () => {
  let value = await AsyncStorage.getItem("$SAVED_TODO");

  if (value != null) {
    return JSON.parse(value);
  }
  return [];
};

export const SetSavedTodo = async (value: TodoResponseType[]) => {
  await AsyncStorage.setItem("$SAVED_TODO", JSON.stringify(value));
};
