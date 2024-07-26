import { StyleSheet, Dimensions } from "react-native";

import {
  BACKGROUND,
  BUTTONS,
  HEIGHT,
  INFORMATION,
  WHITE,
  WIDTH,
} from "../../Todo/Global";

export const AddTodoButtonStyles = StyleSheet.create({
  AddTodoButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: BUTTONS,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  AddTodoButtonImage: {
    height: 35,
    width: 28,
  },
});
