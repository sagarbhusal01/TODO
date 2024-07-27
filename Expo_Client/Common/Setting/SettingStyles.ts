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

const SettingStyles = StyleSheet.create({
  Container: {
    position: "absolute",
    top: HEIGHT * 0.45 - 180 / 3,
    width: WIDTH * 0.9,
    backgroundColor: BACKGROUND,
    alignSelf: "center",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    zIndex: 10,
  },
  Header: {
    color: WHITE,
    fontWeight: "bold",
    fontSize: 22,
  },
  TextInput: {
    width: "90%",
    height: 45,
    backgroundColor: TEXTFEILD,
    marginTop: 15,
    borderRadius: 8,
    paddingLeft: 15,
    color: WHITE,
  },
  DoneButtonContainer: {
    width: "90%",
    display: "flex",
    alignItems: "flex-end",
    marginTop: 15,
  },
  DoneButton: {
    height: 45,
    width: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BUTTONS,
    borderRadius: 8,
  },
  DoneButtonText: {
    color: WHITE,
    fontWeight: "600",
    fontSize: 16,
  },
});
