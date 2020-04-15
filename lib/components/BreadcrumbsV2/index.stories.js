import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import BreadcrumbsV2 from "./index";
import BreadcrumbItemV2 from "../BreadcrumbItemV2";

storiesOf("Examples|Components/BreadcrumbsV2", module)
  .addParameters({ component: BreadcrumbsV2 })
  .add("Basic", props => {
    console.log("props", props);
    return (
      <BreadcrumbsV2>
        <BreadcrumbItemV2>
          <a href="#">crumbies</a>
        </BreadcrumbItemV2>
        <BreadcrumbItemV2>
          <a href="#">crumbies</a>
        </BreadcrumbItemV2>
        <BreadcrumbItemV2>
          <a href="#">crumbies</a>
        </BreadcrumbItemV2>
      </BreadcrumbsV2>
    );
  });
