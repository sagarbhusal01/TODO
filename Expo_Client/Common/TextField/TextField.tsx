import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { PLACEHOLDER } from "../../Global/CONSTANTS";
import { TextFieldStyles } from "./TextFieldStyles";

export default function TextField({ HandleEnter, Title }: any) {
  const [Text, setText] = useState<string>();
  return (
    <View style={TextFieldStyles.Container}>
      <TextInput
        onChangeText={(text: string) => setText(text)}
        value={Text ? Text : undefined}
        style={TextFieldStyles.TextInput}
        placeholder={Title}
        placeholderTextColor={PLACEHOLDER}
        onSubmitEditing={() => {
          HandleEnter(Text);
          setText("");
        }}
      />
    </View>
  );
}
