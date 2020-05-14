import React, { useState } from "react";
import { Textarea } from "./index";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("Examples|Components/Textarea", module).add("Basic", (props) => {
  const [state, setState] = React.useState({
    input: "",
  });

  const setInput = (e) => {
    e.persist();
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Textarea
      label="Textarea label"
      onChange={setInput}
      value={state.input || ""}
      placeholder="Enter Textarea Text"
      name="input"
    />
  );
});
