import React from "react";
import { ThemeProvider } from "../../lib/utils/ThemeProvider";
import { withKnobs, select } from "@storybook/addon-knobs";
import { Section } from "../../lib/marketing/Section";
import { Header } from "../../lib/marketing/Typography";
import { base, invert, neutral, offWhite } from "../../lib/utils/_theme";

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
  OffWhite: offWhite
};
const defaultValue = base;
const groupId = "GROUP-ID1";

export const themeProvider = () => (
  <ThemeProvider theme={select(label, options, defaultValue, groupId)}>
    <Section>
      <Header>ThemeProvider children</Header>
    </Section>
  </ThemeProvider>
);

themeProvider.story = {
  name: "ThemeProvider"
};
