import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { GlobalStyles, HEIGHT } from "../../Global/CONSTANTS";
import TextField from "../../Common/TextField/TextField";
import { GetLocalURL, SetLocalURL } from "../../Common/Functions/LocalURL";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Setting() {
  const [SavedURL, setSavedURL] = useState<string>("");

  GetLocalURL().then((url: any) => {
    setSavedURL(url || "http://192.168.100.144");
  });

  const HandleNewIpAddress = async (URL: string) => {
    SetLocalURL(URL.toLocaleLowerCase()).then(() => {
      GetLocalURL().then((url: any) => {
        setSavedURL(url || "http://192.168.100.144");
      });
    });
  };

  return (
    <View style={GlobalStyles.Container}>
      <View
        style={{
          marginTop: 110,
        }}
      >
        <TextField HandleEnter={HandleNewIpAddress} Title={SavedURL} />
      </View>
    </View>
  );
}
