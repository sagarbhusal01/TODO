import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { HeaderStyles } from "../../Styles/Todo/HeaderStyles";

export default function Header(props: any) {
  return (
    <View style={HeaderStyles.Wrapper}>
      <Text style={HeaderStyles.Header}>Todo</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          props.setToggleSetting(true);
        }}
      >
        <Image
          source={require("../../assets/Images/Settings.png")}
          style={HeaderStyles.SettingImage}
        />
      </TouchableOpacity>
    </View>
  );
}
