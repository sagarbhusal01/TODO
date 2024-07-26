import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { PLACEHOLDER } from "../Global";
import { TextFieldStyles } from "../../Styles/Todo/TextFieldStyles";

export default function TextField(props: any) {
  const [TodoText, setTodoText] = useState<string>();
  return (
    <View style={TextFieldStyles.Container}>
      <TextInput
        onChangeText={(text: string) => setTodoText(text)}
        value={TodoText ? TodoText : undefined}
        style={TextFieldStyles.TextInput}
        placeholder="Do some Work Here."
        placeholderTextColor={PLACEHOLDER}
        onSubmitEditing={() => {
          props.HandleAddTodo(TodoText);
          setTodoText("");
        }}
      />
    </View>
  );
}
