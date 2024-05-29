import { DELETETODOURL } from "../Global";
import { TodoResponseType } from "../Types";
import { GetLocalURL } from "./LocalURL";

export const DeleteTodo = async (id: number) => {
  let LocalIP = await GetLocalURL();
  let url = "http://" + LocalIP + DELETETODOURL + "/" + id;

  return fetch(url, {
    method: "DELETE",
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
