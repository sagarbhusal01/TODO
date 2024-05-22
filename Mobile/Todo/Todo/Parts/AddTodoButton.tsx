import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AddTodoButtonStyles } from "../../Styles/Todo/AddTodoButtonStyles";

const AddTodoButton = (props: any) => {
  return (
    <TouchableOpacity
      style={AddTodoButtonStyles.AddTodoButton}
      activeOpacity={0.5}
    >
      <Image
        source={require("../../assets/Images/Add.png")}
        style={AddTodoButtonStyles.AddTodoButtonImage}
      />
    </TouchableOpacity>
  );
};

export default AddTodoButton;
