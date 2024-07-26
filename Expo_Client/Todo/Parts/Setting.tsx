import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { PLACEHOLDER } from "../Global";
import { SettingStyles } from "../../Styles/Todo/SettingStyles";
import { GetLocalURL } from "../Functions/LocalURL";

const Setting = (props: any) => {
  const [NewURL, setNewURL] = useState<String>("");
  const [SavedURL, setSavedURL] = useState<string>("");

  GetLocalURL().then((url: any) => {
    setSavedURL(url || "192.168.100.144");
  });

  return (
    <View style={SettingStyles.Container}>
      <Text style={SettingStyles.Header}>Set New IP</Text>
      <TextInput
        onChangeText={(text: string) => setNewURL(text)}
        style={SettingStyles.TextInput}
        placeholder={SavedURL}
        placeholderTextColor={PLACEHOLDER}
      />
      <View style={SettingStyles.DoneButtonContainer}>
        <TouchableOpacity
          style={SettingStyles.DoneButton}
          activeOpacity={0.6}
          onPress={() => {
            if (NewURL) {
              props.HandleLocalURL(NewURL);
            }
          }}
        >
          <Text style={SettingStyles.DoneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;
