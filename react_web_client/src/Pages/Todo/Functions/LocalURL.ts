import { TodoResponseType } from "../Types";
import { GETALLTODOURL } from "../Global";

export const GetLocalURL = () => {
  let IP = localStorage.getItem("$LOCAL_IP");
  if (IP) {
    return IP;
  } else {
    return "192.168.100.144";
  }
};

export const SetLocalURL = (value: string) => {
  TestNewIP(value).then((res: any) => {
    if (res != null) {
      localStorage.setItem("$LOCAL_IP", value);
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
