import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import BreadcrumbsV2 from "./index";
import { Icon } from "../../elements/Icon";
import BreadcrumbItemV2 from "../BreadcrumbItemV2";
import { Circular } from "../../elements/Typography";
import "./story-styles.scss";

storiesOf("Examples|Components/BreadcrumbsV2", module)
  // .addParameters({
  //   component: BreadcrumbsV2,
  //   parameters: { docs: { page: null } }
  // })
  .add("Basic", props => {
    return (
      <BreadcrumbsV2>
        <BreadcrumbItemV2>
          <a href="/#">
            <Icon type="design" iconLeft />
            crumbies
          </a>
        </BreadcrumbItemV2>
        <BreadcrumbItemV2>
          <a href="/#">crumbies</a>
        </BreadcrumbItemV2>
        <BreadcrumbItemV2>
          <a href="/#">crumbies</a>
        </BreadcrumbItemV2>
      </BreadcrumbsV2>
    );
  })
  .add("with default active prop", props => {
    return (
      <BreadcrumbsV2>
        <BreadcrumbItemV2 active={true}>
          <a href="/#">
            <Icon type="popup" iconLeft />
            <Circular fontSize="14px" textTransform="lowercase">
              crumbies
            </Circular>
          </a>
        </BreadcrumbItemV2>
        <BreadcrumbItemV2 active={false}>
          <a href="/#">
            <Icon type="integrations" iconLeft />
            <Circular fontSize="14px" textTransform="lowercase">
              crumbies
            </Circular>
          </a>
        </BreadcrumbItemV2>
        <BreadcrumbItemV2>
          <a href="/#">
            <Icon type="upgrade" iconLeft />
            <Circular fontSize="14px" textTransform="lowercase">
              crumbies
            </Circular>
          </a>
        </BreadcrumbItemV2>
      </BreadcrumbsV2>
    );
  })
  .add("with class props", props => {
    return (
      <BreadcrumbsV2 className="breadcrumbs">
        <BreadcrumbItemV2 className="breadcrumbs__crumb active">
          <a href="/#">
            <Icon type="popup" iconLeft fill="#ffffff" />
            <Circular fontSize="14px" textTransform="lowercase" color="#ffffff">
              crumbies
            </Circular>
          </a>
        </BreadcrumbItemV2>
        <BreadcrumbItemV2 className="breadcrumbs__crumb">
          <a href="/#">
            <Icon type="integrations" iconLeft fill="#ffffff" />
            <Circular fontSize="14px" textTransform="lowercase" color="#ffffff">
              crumbies
            </Circular>
          </a>
        </BreadcrumbItemV2>
        <BreadcrumbItemV2 className="breadcrumbs__crumb">
          <a href="/#">
            <Icon type="upgrade" iconLeft fill="#ffffff" />
            <Circular fontSize="14px" textTransform="lowercase" color="#ffffff">
              crumbies
            </Circular>
          </a>
        </BreadcrumbItemV2>
      </BreadcrumbsV2>
    );
  });
