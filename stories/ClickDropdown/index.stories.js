import React, { useState } from "react";
import {
  withKnobs,
  radios,
  number,
  boolean,
  optionsKnob
} from "@storybook/addon-knobs";
import { ClickDropdown } from "../../lib/components/ClickDropdown";
import { colors } from "../../lib/utils/_variables";
import { ContainerBox } from "../../lib/layout/ContainerBox";

export default {
  component: ClickDropdown,
  title: "Components/ClickDropdown",
  parameters: {
    componentSubtitle: "ClickDropdown subtitle"
  },

  decorators: [withKnobs]
};

export const clickDropdown = () => {
  const [colorState, setColorState] = useState(colors.blue);

  const colorOptions = [
    {
      title: "Blue",
      onClick: () => setColorState(colors.blue)
    },
    {
      title: "Green",
      onClick: () => setColorState(colors.green)
    },
    {
      title: "Red",
      onClick: () => setColorState(colors.red)
    },
    {
      title: "Yellow",
      onClick: () => setColorState(colors.gold)
    }
  ];

  return (
    <>
      <ContainerBox customHeight={100} customWidth={100} bg={colorState} />
      <br />
      <br />
      <ClickDropdown options={colorOptions} />
    </>
  );
};
