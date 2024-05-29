import React from "react";

export default function TodoList(props: any) {
  return (
    <>
      {props.Data.length ? (
        <div id="ListCellWrapper">
          {props.Data.map((names: any) => {
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
                  <p>{names.todo}</p>
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
