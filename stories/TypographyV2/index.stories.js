import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Label } from "../../lib/elements/Label";
import { Description } from "../../lib/elements/Description";

storiesOf("Design Guidelines|Foundation/TypographyV2", module)
  .add("Label", () => {
    return <Label>Label</Label>;
  })
  .add("Description", () => {
    return <Description>Description</Description>;
  });
