import React, { useState } from "react";

export default function TextField(props: any) {
  const [Text, setText] = useState<string>("");

  const OnEnterButtonPressed = (e: any) => {
    if (e.key === "Enter") {
      if (Text.replaceAll(" ", "").length !== 0) {
        props.HandleAddTodo(Text);
        e.target.value = "";
      }
    }
  };
  return (
    <input
      type="text"
      id="TextField"
      placeholder="Do some work here."
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => OnEnterButtonPressed(e)}
    />
  );
}
