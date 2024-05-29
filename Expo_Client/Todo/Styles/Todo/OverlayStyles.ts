import { StyleSheet, Dimensions } from "react-native";

import {
  BACKGROUND,
  BUTTONS,
  HEIGHT,
  INFORMATION,
  WHITE,
  WIDTH,
} from "../../Todo/Global";

export const OverlayStyles = StyleSheet.create({
  OverlayBackground: {
    backgroundColor: "#00000075",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 8,
  },
});
