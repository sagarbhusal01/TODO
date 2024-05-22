import { Dimensions,StyleSheet } from "react-native";

export const BACKGROUND = "#373737";
export const BUTTONS = "#868686";
export const TEXTFEILD = "#575757";
export const INFORMATION = "#505050";
export const WIDTH = Dimensions.get("screen").width;
export const WHITE = "#ffffff";
export const HEIGHT = Dimensions.get("screen").height;
export const GETALLTODOURL = ":1917/getalltodo";
export const ADDTODOURL = ":1917/addtodo";
export const TOGGLETODOURL = ":1917/togglecompleted";
export const DELETETODOURL = ":1917/deletetodo";


export const GlobalStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
});
