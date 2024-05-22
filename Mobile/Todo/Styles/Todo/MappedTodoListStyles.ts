import { StyleSheet, Dimensions } from "react-native";

import {
  BACKGROUND,
  BUTTONS,
  HEIGHT,
  COMPLETEDPOP,
  INFORMATION,
  WHITE,
  WIDTH,
} from "../../Todo/Global";

export const MappedTodoListStyles = StyleSheet.create({
  TodoListContainer: {
    marginTop: 20,
  },
  TodoListCell: {
    height: 60,
    width: WIDTH * 0.88,
    alignSelf: "center",
    backgroundColor: INFORMATION,
    borderRadius: 10,
    display: "flex",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ToggleButtonPlaceholder: {
    width: 45,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ToggleCompletedButton: {
    height: 20,
    width: 20,
    backgroundColor: COMPLETEDPOP,
    borderRadius: 100,
  },
  RemoveButtonImage: {
    height: 28,
    width: 25,
  },
  RemoveButton: {},

  TodoTextPlaceHolder: {
    width: WIDTH * 0.67,
  },
  TodoText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "600",
  },
});
