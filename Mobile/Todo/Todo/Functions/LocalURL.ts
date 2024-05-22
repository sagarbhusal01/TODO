import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetLocalURL = async () => {
  try {
    const value = await AsyncStorage.getItem("$LOCAL_IP");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return;
  }
};

export const SetLocalURL = async (value: string) => {
  try {
    await AsyncStorage.setItem("$LOCAL_IP", value);
  } catch (e) {
    return;
  }
};
