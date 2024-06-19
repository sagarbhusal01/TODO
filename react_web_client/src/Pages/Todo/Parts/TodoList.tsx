import React from "react";
import { IDEATAG } from "../Global";

export default function TodoList(props: any) {
  return (
    <>
      {props.Data.length ? (
        <div id="ListCellWrapper">
          {props.Data.map((names: any) => {
            let isIdea = names.todo.split(" ")[0].toUpperCase() === "IDEA";
            return (
              <div
                key={names.id}
                className="ListCell"
                onDoubleClick={() => {
                  if (!names.iscompleted) {
                    props.HandleToggleCompleted(names.id);
                  }
                }}
              >
                <div className="IsCompletedButtonContainer">
                  {names.iscompleted && (
                    <div
                      className="IsCompletedButton"
                      onClick={() => props.HandleToggleCompleted(names.id)}
                    />
                  )}
                </div>

                <div className="TodoTextContainer">
                  {isIdea ? (
                    <div className="IdeaTagContainer">
                      <p
                        className="IdeaTag"
                        style={{ backgroundColor: IDEATAG }}
                      >
                        Idea
                      </p>
                      <p>{names.todo.split(" ").slice(1).join(" ")}</p>
                    </div>
                  ) : (
                    <p>{names.todo}</p>
                  )}
                </div>

                <div className="DeleteButtonContainer">
                  {names.iscompleted && (
                    <button
                      className="DeleteButton"
                      onClick={() => {
                        props.HandleDelete(names.id);
                      }}
                    >
                      <img
                        alt="Delete Button"
                        src={require("../../../assets/Remove.png")}
                        className="DeleteImage"
                      />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p id="NoTOdo">No Todo To Show</p>
      )}
    </>
  );
}
