import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { HeaderStyles } from "../../Styles/Todo/HeaderStyles";

export default function Header() {
  return (
    <View style={HeaderStyles.Wrapper}>
      <Text style={HeaderStyles.Header}>Todo</Text>
      <TouchableOpacity activeOpacity={0.6}>
        <Image
          source={require("../../assets/Images/Settings.png")}
          style={HeaderStyles.SettingImage}
        />
      </TouchableOpacity>
    </View>
  );
}
