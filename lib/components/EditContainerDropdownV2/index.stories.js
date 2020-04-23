import React, { useState } from "react";
import {
  withKnobs,
  radios,
  number,
  boolean,
  optionsKnob,
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { EditContainerDropdown } from "./index";
import { colorPicker } from "../../utils/_dashVariables";
import { ContainerBox } from "../../layout/ContainerBox";

storiesOf("Examples|Components/EditContainerDropdown", module).add(
  "Basic",
  () => {
    const colorOptions = [
      {
        label: "Blue",
        onClick: () => setColorState(colors.blue),
      },
      {
        label: "Green",
        onClick: () => setColorState(colors.green),
      },
      {
        label: "Red",
        onClick: () => setColorState(colors.red),
      },
      {
        label: "Yellow",
        onClick: () => setColorState(colors.gold),
      },
    ];
    const [colorState, setColorState] = useState(colorPicker.blue);
    return (
      <div style={{ marginBottom: 200 }}>
        <EditContainerDropdown options={colorOptions} paddingTop={20}>
          <ContainerBox customHeight={100} customWidth={100}>
            <img
              src="https://i.imgur.com/8LA1oBL.png"
              alt="placeholder-image"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </ContainerBox>
        </EditContainerDropdown>
      </div>
    );
  }
);
