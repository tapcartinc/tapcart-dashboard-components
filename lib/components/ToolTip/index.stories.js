import React from "react";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { ToolTip } from "./index";
import { swatches } from "../../utils/_swatches";

const stories = storiesOf("Examples|Components/ToolTip", module);

stories
  .add("basic", () => {
    return <ToolTip>This shit is bananas - b a n a n a s.</ToolTip>;
  })
  .add("with custom color", () => {
    return (
      <ToolTip color={swatches.disabledState}>
        THIS SHIT IS BANANAS - B A N A N A S.
      </ToolTip>
    );
  })
  .add("with custom message height and top positioning", () => {
    return (
      <ToolTip color={swatches.disabledState} top="-100px">
        This shit is bananas - b a n a n a s.
        <br />
        THIS SHIT IS BANANAS - B A N A N A S.
        <br />
        This shit is bananas - b a n a n a s.
        <br />
        THIS SHIT IS BANANAS - B A N A N A S.
      </ToolTip>
    );
  });
