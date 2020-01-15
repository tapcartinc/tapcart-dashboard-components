import React, { useState } from "react";

import { Loader } from "../../lib/elements/Loader";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { colors } from "../../lib";

export default {
  component: Loader,
  title: "Components/Loader",
  decorators: [withKnobs]
};

export const loader = () => {
  return <Loader />;
};
