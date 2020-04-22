import React, { useState } from "react";
import {
  withKnobs,
  select,
  number,
  boolean,
  optionsKnob,
} from "@storybook/addon-knobs";
import { EditContainer } from "../../lib/components/EditContainer";
import { ContainerBox } from "../../lib/layout/ContainerBox";
import { colors } from "../../lib/utils/_variables";

export default {
  component: EditContainer,
  title: "Components/EditContainer",
  parameters: {
    componentSubtitle: "EditContainer subtitle placeholder",
  },

  decorators: [withKnobs],
};

export const editContainer = (props) => {
  const [colorState, setColorState] = useState(colors.blue);
  const editContainerOptions = [
    {
      className: "edit",
      text: "Edit Content",
      icon: "edit-content",
      type: "button",
      typeOptions: {
        handler: () => console.log("hi"),
      },
    },
    {
      className: "remove",
      text: "Remove Block",
      icon: "trash",
      type: "button",
      typeOptions: {
        handler: () => console.log("hi"),
      },
    },
  ];

  return (
    <>
      <EditContainer {...props} items={editContainerOptions}>
        <ContainerBox
          customHeight={200}
          customWidth={300}
          customWidthMd={100}
          bg={colorState}
        />
      </EditContainer>
      <br />
      <br />
    </>
  );
};
