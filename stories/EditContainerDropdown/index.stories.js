import React, { useState } from "react";
import {
  withKnobs,
  radios,
  number,
  boolean,
  optionsKnob
} from "@storybook/addon-knobs";
import { EditContainerDropdown } from "../../lib/components/EditContainerDropdown";
import { colors } from "../../lib/utils/_variables";
import { ContainerBox } from "../../lib/layout/ContainerBox";

export default {
  component: EditContainerDropdown,
  title: "Components/EditContainerDropdown",
  parameters: {
    componentSubtitle: "EditContainerDropdown subtitle"
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
      <br />

      <EditContainerDropdown options={colorOptions} paddingTop={20}>
        <ContainerBox
          customHeight={100}
          customWidth={100}
          style={{ boxShadow: "0 0 0 2px red" }}
        >
          <img
            src="https://i.imgur.com/8LA1oBL.png"
            alt="blah"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </ContainerBox>
      </EditContainerDropdown>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
