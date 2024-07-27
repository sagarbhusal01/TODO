import { StyleSheet, Dimensions } from "react-native";

import {
  BACKGROUND,
  BUTTONS,
  HEIGHT,
  INFORMATION,
  WHITE,
  WIDTH,
} from "../../Global/CONSTANTS";

export const HeaderStyles = StyleSheet.create({
  Wrapper: {
    width: WIDTH * 0.98,
    padding: 15,
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: HEIGHT * 0.05,
    justifyContent: "space-between",
  },

  SettingImage: {
    height: 30,
    width: 30,
    alignSelf: "center",
  },
  Header: {
    fontSize: 30,
    fontWeight: "bold",
    color: WHITE,
  },
});
