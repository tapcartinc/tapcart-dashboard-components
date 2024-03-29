import React, { useState } from "react";
import {
  withKnobs,
  select,
  number,
  boolean,
  optionsKnob
} from "@storybook/addon-knobs";
import { HoverDropdown } from "../../lib/components/HoverDropdown";
import { ContainerBox } from "../../lib/layout/ContainerBox";
import { Icon } from "../../lib/elements/Icon";
import { colors } from "../../lib/utils/_variables";

export default {
  component: HoverDropdown,
  title: "Components/HoverDropdown",
  parameters: {
    componentSubtitle: "HoverDropdown subtitle placeholder"
  },

  decorators: [withKnobs]
};

export const hoverDropdown = () => {
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
      <ContainerBox
        customHeight={100}
        customWidth={100}
        customWidthMd={100}
        bg={colorState}
      />
      <br />
      <br />
      <HoverDropdown
        title="colors"
        options={[
          {
            title: "Blue",
            active: false,
            onClick: () => setColorState(colors.blue)
          },
          {
            title: "Green",
            active: true,
            onClick: () => setColorState(colors.green)
          },
          {
            title: "Red",
            active: false,
            onClick: () => setColorState(colors.red)
          },
          {
            title: "Yellow",
            active: false,
            onClick: () => setColorState(colors.gold)
          }
        ]}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon iconLeft type="design" dropdown />
          Dropdown
        </div>
      </HoverDropdown>
    </>
  );
};
