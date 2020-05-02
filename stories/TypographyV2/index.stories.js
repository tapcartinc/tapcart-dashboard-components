import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { LabelV2 } from "../../lib/elements/LabelV2";
import { DescriptionV2 } from "../../lib/elements/DescriptionV2";

storiesOf("Design Guidelines|Foundation/TypographyV2", module)
  .add("Label", () => {
    return <LabelV2>LabelV2</LabelV2>;
  })
  .add("Description", () => {
    return <DescriptionV2>DescriptionV2</DescriptionV2>;
  });
