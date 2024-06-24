import React from "react";
import { IDEATAG } from "../Global";
import { DetermineTag, ExtractTodo, ParsedTag } from "../Functions/Tag";

export default function TodoList(props: any) {
  return (
    <>
      {props.Data.length ? (
        <div id="ListCellWrapper">
          {props.Data.map((names: any) => {
            let isTag = DetermineTag(names.todo);

            let Tag = isTag ? ParsedTag(names.todo) : "";

            let ExtractedTodo = isTag ? ExtractTodo(names.todo) : "";

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
                  {isTag ? (
                    <div className="IdeaTagContainer">
                      <p
                        className="IdeaTag"
                        style={{ backgroundColor: IDEATAG }}
                      >
                        {Tag}
                      </p>
                      <p>{ExtractedTodo}</p>
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
