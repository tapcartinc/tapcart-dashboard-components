import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Breadcrumbs } from "../../lib/components/Breadcrumbs/index";

export default {
  component: Breadcrumbs,
  title: "Components/Breadcrumbs",
  decorators: [withKnobs]
};

export const breadcrumbs = () => (
  <Breadcrumbs
    crumbs={[
      {
        crumb: "Integrations",
        icon: "integrations",
        onClick: () => console.log("hi")
      },
      // {
      //   crumb: "crumb 2",
      //   active: true,
      //   onClick: () => console.log("hi2")
      // },
      {
        crumb: "YOTPO"
      }
    ]}
  ></Breadcrumbs>
);
