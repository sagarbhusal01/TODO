import React, { useState } from "react";

export default function TextField(props: any) {
  const [Text, setText] = useState<string>("");

  const OnEnterButtonPressed = (e: any) => {
    if (e.key === "Enter") {
      props.HandleAddTodo(Text);
      e.target.value = "";
    }
  };
  return (
    <input
      type="text"
      id="TextField"
      placeholder="Do some Work Here."
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => OnEnterButtonPressed(e)}
    />
  );
}
