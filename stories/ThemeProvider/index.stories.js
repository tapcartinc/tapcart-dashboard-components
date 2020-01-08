import React from "react";
import { ThemeProvider } from "../../lib/utils/ThemeProvider";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Hero } from "../../lib/marketing/Hero";
import { Header } from "../../lib/marketing/Typography";

export default {
  component: ThemeProvider,
  title: "ThemeProvider",
  decorators: [withKnobs]
};

export const themeProvider = () => (
  <ThemeProvider theme={text("neutral", "neutral")}>
    <Hero>
      <Header>blah</Header>
    </Hero>
  </ThemeProvider>
);
