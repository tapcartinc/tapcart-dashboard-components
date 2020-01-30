import React from "react";
import { ThemeProvider } from "../../lib/utils/ThemeProvider";
import { withKnobs, select } from "@storybook/addon-knobs";
import { Header } from "../../lib/elements/Typography";
import {
  base,
  invert,
  neutral,
  offWhite,
  gradient
} from "../../lib/utils/_theme";
import { colors } from "../../lib";

export default {
  component: ThemeProvider,
  title: "Layout/ThemeProvider",
  parameters: {
    componentSubtitle: "Handy theme-ing component"
  },

  decorators: [withKnobs]
};

const label = "Theme";
const options = {
  InvertBase: invert(base),
  Base: base,
  Neutral: neutral,
  OffWhite: offWhite,
  Gradient: gradient(colors.offwhite, colors.gray10)
};
const defaultValue = base;
const groupId = "GROUP-ID1";

export const themeProvider = () => (
  <ThemeProvider theme={select(label, options, defaultValue, groupId)}>
    <Header>ThemeProvider children</Header>
  </ThemeProvider>
);

themeProvider.story = {
  name: "ThemeProvider"
};
