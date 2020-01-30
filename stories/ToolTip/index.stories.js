import React, { useState } from "react";
import {
  withKnobs,
  select,
  number,
  boolean,
  optionsKnob
} from "@storybook/addon-knobs";
import { ToolTip } from "../../lib/components/ToolTip";
import { colors } from "../../lib/utils/_variables";
import { colorPicker } from "../../lib/utils/_dashVariables";
import { Container } from "../../lib/layout/Container";

export default {
  component: ToolTip,
  title: "Components/ToolTip",
  parameters: {
    componentSubtitle: "ToolTip subtitle placeholder"
  },

  decorators: [withKnobs]
};

export const toolTip = () => {
  const [colorState, setColorState] = useState(colors.blue);

  const colorOptions = [
    {
      title: "Blue",
      onClick: () => setColorState(colors.blue)
    }
  ];
  return (
    <Container>
      <ToolTip color={colorPicker.gray}>blah blah blah</ToolTip>
      <ToolTip>blah blah blah</ToolTip>
    </Container>
  );
};
