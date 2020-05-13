import React from "react";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Tooltip", module);

stories.addDecorator(withKnobs);
stories.add("with a button", () => {
  const style = {
    backgroundColor: "#FFF",
    border: "1px solid #DDD",
    borderRadius: 2,
    outline: 0,
    fontSize: 15,
    cursor: "pointer",
  };
  return (
    <button disabled={boolean("Disabled", true)} style={object("Style", style)}>
      {text("Label", "Hello Button")}
    </button>
  );
});
