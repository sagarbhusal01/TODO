import { Dimensions, StyleSheet } from "react-native";

export const BACKGROUND = "#373737";
export const PLACEHOLDER = "#989898";
export const BUTTONS = "#868686";
export const TEXTFEILD = "#575757";
export const INFORMATION = "#505050";
export const IDEATAG = "#F6A23D";
export const EMERGENCYTAG = "tomato";
export const WIDTH = Dimensions.get("window").width;
export const WHITE = "#ffffff";
export const HEIGHT = Dimensions.get("window").height;
export const GETALLTODOURL = ":1917/getalltodo";
export const ADDTODOURL = ":1917/addtodo";
export const TOGGLETODOURL = ":1917/togglecompleted";
export const DELETETODOURL = ":1917/deletetodo";

export const GlobalStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  Wrapper: {
    marginTop: HEIGHT * 0.05,
  },
});
