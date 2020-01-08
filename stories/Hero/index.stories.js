import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Hero } from "../../lib/marketing/Hero/index";
import { ThemeProvider } from "styled-components";

export default {
  component: Hero,
  title: "Hero",
  decorators: [withKnobs]
};

export const hero = () => (
  <ThemeProvider>
    <Hero>Primary</Hero>
  </ThemeProvider>
);

// layout: "leftAlign",
// overflowHidden: false,
// minHeight: "800px",
// contentHeight: false,
// tombstone: false,
// aboveFold: false
