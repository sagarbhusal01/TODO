import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { OverlayStyles } from "../../Styles/Todo/OverlayStyles";

const Overlay = (props: any) => {
  return (
    <>
      {props.Toggle && (
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              props.setToggle(false);
            }}
            style={OverlayStyles.OverlayBackground}
          />
          {props?.Children}
        </>
      )}
    </>
  );
};

export default Overlay;
