import { TodoResponseType } from "../../../Global/Types";
import { GETALLTODOURL } from "../../../Global/CONSTANTS";
import { GetLocalURL } from "./LocalURL";
export const GetAllTodos = async () => {
  let LocalIP = await GetLocalURL();
  let url = "http://" + LocalIP + GETALLTODOURL;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((responseData: TodoResponseType[]) => {
      return responseData;
    });
};
