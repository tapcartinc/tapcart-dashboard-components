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
    showPanel: true,
    panelPosition: "bottom",
    storySort: (a, b) => {
      const config = [
        {
          category: "Intro",
          order: ["Intro"],
        },
        {
          category: "Documentation",
          order: ["Documentation"],
        },
        {
          category: "Design-Guidelines",
          order: ["Design-Guidelines"],
        },
      ];

      const story1 = a[1].kind.split("|");
      const story2 = b[1].kind.split("|");

      function getOrderNumber(needle, haystack) {
        let order = 9999;
        if (Array.isArray(haystack)) {
          order = haystack.findIndex(
            (h) => h.toLowerCase() === needle.toLowerCase()
          );
          if (order === -1) order = 9999;
        }
        return order;
      }

      const topLevelOrderArray = config.map((h) => h.category);

      const topLevelOrder1 = getOrderNumber(story1[0], topLevelOrderArray);
      const topLevelOrder2 = getOrderNumber(story2[0], topLevelOrderArray);

      if (story1[0] !== story2[0]) {
        return topLevelOrder1 - topLevelOrder2;
      }

      if (story1[1] !== story2[1]) {
        return (
          getOrderNumber(
            story1[1],
            config[topLevelOrder1] && config[topLevelOrder1].order
          ) -
          getOrderNumber(
            story2[1],
            config[topLevelOrder2] && config[topLevelOrder2].order
          )
        );
      }

      return 0;
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
