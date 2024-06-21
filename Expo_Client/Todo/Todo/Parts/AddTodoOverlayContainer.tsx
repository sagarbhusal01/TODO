import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AddTodoOverlayContainerStyles } from "../../Styles/Todo/AddTodoOverlayContainerStyles";
import { PLACEHOLDER } from "../Global";

const AddTodoOverlayContainer = (props: any) => {
  const [TodoText, setTodoText] = useState<String>("");
  return (
    <View style={AddTodoOverlayContainerStyles.Container}>
      <Text style={AddTodoOverlayContainerStyles.Header}>Add Todo</Text>
      <TextInput
        onChangeText={(text: string) => setTodoText(text)}
        style={AddTodoOverlayContainerStyles.TextInput}
        placeholder="Do some Work Here."
        placeholderTextColor={PLACEHOLDER}
      />
      <View style={AddTodoOverlayContainerStyles.DoneButtonContainer}>
        <TouchableOpacity
          style={AddTodoOverlayContainerStyles.DoneButton}
          activeOpacity={0.6}
          onPress={() => {
            if (TodoText.replaceAll(" ", "").length !== 0) {
              props.HandleAddTodo(TodoText);
            }
          }}
        >
          <Text style={AddTodoOverlayContainerStyles.DoneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTodoOverlayContainer;
