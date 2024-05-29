import React, { useState } from "react";

export default function TextField(props: any) {
  const [Text, setText] = useState<string>("");

  return (
    <input
      type="text"
      id="TextField"
      placeholder="Do some Work Here."
      onChange={(e) => setText(e.target.value)}
    />
  );
}
