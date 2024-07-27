import { ADDTODOURL, GETALLTODOURL } from "../../../Global/CONSTANTS";
import { TodoResponseType } from "../../../Global/Types";
import { GetLocalURL } from "./LocalURL";

export const AddTodo = async (todo: string) => {
  let LocalIP = await GetLocalURL();
  let url = "http://" + LocalIP + ADDTODOURL;

  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo: todo,
      iscompleted: false,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData: TodoResponseType[]) => {
      return responseData;
    });
};
