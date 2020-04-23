import React, { useState } from "react";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import GlobalStyle from "../lib/utils/_global";
import centered from "@storybook/addon-centered/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { create } from "@storybook/theming";
import TapcartLogo from "./assets/tapcart-logo.svg";

const theme = create({
  base: "light",
  brandImage: TapcartLogo,
  brandTitle: "Tapart Dashboard Component Library",
  url: "https://github.com/tapcartinc/tapcart-dashboard-components",
});

addParameters({
  options: {
    theme,
    showPanel: false,
    panelPosition: "right",
    storySort: (a, b) => {
      console.log("a", a);
      if (a[0].includes("intro-")) {
        return -1;
      }

      return 1;
    },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

// Custom center decorator that supports docs extensions
addDecorator((...args) => {
  const params = new URL(document.location).searchParams;
  const isInDockView = params.get("viewMode") === "docs";

  if (isInDockView) {
    return args[0]();
  }

  return centered(...args);
});

// Add all our decorators
addDecorator(withKnobs);

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

let auth = false;

const loadStories = () => {
  return [
    require.context("./docs", true, /Intro.story.mdx/),
    require.context("./docs", true, /GettingStarted.story.mdx/),
    require.context("./docs", true, /\.story\.mdx$/),
    require.context("../stories", true, /\.stories\.mdx$/),
    require.context("../stories", true, /\.stories\.js$/),
    require.context("../lib", true, /\.stories\.js$/),
    require.context("../lib", true, /\.story\.mdx$/),
    require.context("../lib", true, /\.stories\.mdx$/),
  ];
};

configure(loadStories(), module);
