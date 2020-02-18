import React, { useEffect, useRef, useState } from "react";
import { Textarea } from "../../lib/components/Textarea";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  component: Textarea,
  title: "Components/Textarea",
  decorators: [withKnobs]
};

export const textarea = () => {
  const [state, setState] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef && inputRef.current) {
      return inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <Textarea
        onChange={e => setState(e.target.value)}
        value={state}
        innerRef={inputRef}
        maxLength={50}
        // label={text("Label", "Input Label")}
        error={boolean("Throw error", false)}
        placeholder="Input placeholder..."
      />
    </>
  );
};
