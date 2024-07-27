import { StyleSheet, Dimensions } from "react-native";

import {
  BACKGROUND,
  BUTTONS,
  HEIGHT,
  INFORMATION,
  WHITE,
  WIDTH,
  TEXTFEILD,
} from "../../Global/CONSTANTS";

export const TextFieldStyles = StyleSheet.create({
  Container: {
    width: WIDTH * 0.88,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  TextInput: {
    width: "100%",
    height: 45,
    backgroundColor: TEXTFEILD,
    borderRadius: 8,
    paddingLeft: 15,
    color: WHITE,
  },
});
