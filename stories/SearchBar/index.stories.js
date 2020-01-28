import React, { useEffect, useRef, useState } from "react";
import { SearchBar } from "../../lib/components/SearchBar";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  component: SearchBar,
  title: "Components/SearchBar",
  decorators: [withKnobs]
};

export const searchBar = () => {
  const [state, setState] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef && inputRef.current) {
      return inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <SearchBar
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
