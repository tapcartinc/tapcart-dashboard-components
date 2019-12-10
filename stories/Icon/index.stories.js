import React, { useState } from "react";
import { Icon } from "../../lib/elements/Icon";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  component: Icon,
  title: "Icon",
  decorators: [withKnobs]
};

export const icon = () => {
  return (
    <>
      <Icon type="webinar" />
    </>
  );
};
