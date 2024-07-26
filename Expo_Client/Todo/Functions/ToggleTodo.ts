import { TOGGLETODOURL } from "../Global";
import { TodoResponseType } from "../Types";
import { GetLocalURL } from "./LocalURL";

export const ToggleTodo = async (id: number) => {
  let LocalIP = await GetLocalURL();
  let url = "http://" + LocalIP + TOGGLETODOURL + "/" + id;

  return fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData: TodoResponseType[]) => {
      return responseData;
    });
};
