import AsyncStorage from "@react-native-async-storage/async-storage";
import { GETALLTODOURL } from "../../../Global/CONSTANTS"
import { TodoResponseType } from "../../../Global/Types";

export const GetLocalURL = async () => {
  return await AsyncStorage.getItem("$LOCAL_IP");
};

export const SetLocalURL = async (value: string) => {
  TestNewIP(value).then(async (res: any) => {
    if (res != null) {
      await AsyncStorage.setItem("$LOCAL_IP", value);
    }
  });
};

export const TestNewIP = async (NewIP: string) => {
  let url = "http://" + NewIP + GETALLTODOURL;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((responseData: TodoResponseType[]) => {
      return responseData;
    })
    .catch(() => {
      return null;
    });
};
