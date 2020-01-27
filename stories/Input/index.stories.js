import React, { useEffect, useRef, useState } from "react";
import { Input } from "../../lib/components/Input";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  component: Input,
  title: "Components/Input",
  decorators: [withKnobs]
};

export const input = () => {
  const [state, setState] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef && inputRef.current) {
      return inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <Input
        onChange={e => setState(e.target.value)}
        value={state}
        innerRef={inputRef}
        maxLength={50}
        label={text("Label", "Input Label")}
        error={boolean("Throw error", false)}
        placeholder="Input placeholder..."
      />
    </>
  );
};
