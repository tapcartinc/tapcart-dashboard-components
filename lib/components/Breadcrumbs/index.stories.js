import React from "react";
import { storiesOf } from "@storybook/react";
import { Breadcrumbs } from "./index";
import { Icon } from "../../elements/Icon";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { Circular } from "../../elements/TypographyOld";
import "./story-styles.scss";

import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf("Examples|Components/Breadcrumbs", module)
  .add("Basic", (props) => {
    return (
      <Breadcrumbs>
        <BreadcrumbItem>
          <a href="/#">
            <Icon type="design" iconLeft />
            crumbies
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/#">crumbies</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/#">crumbies</a>
        </BreadcrumbItem>
      </Breadcrumbs>
    );
  })
  .add("with default active prop", (props) => {
    return (
      <Breadcrumbs>
        <BreadcrumbItem active={true}>
          <a href="/#">
            <Icon type="popup" iconLeft />
            <Circular fontSize="14px" textTransform="lowercase">
              crumbies
            </Circular>
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active={false}>
          <a href="/#">
            <Icon type="integrations" iconLeft />
            <Circular fontSize="14px" textTransform="lowercase">
              crumbies
            </Circular>
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/#">
            <Icon type="upgrade" iconLeft />
            <Circular fontSize="14px" textTransform="lowercase">
              crumbies
            </Circular>
          </a>
        </BreadcrumbItem>
      </Breadcrumbs>
    );
  })
  .add("with class props", (props) => {
    return (
      <Breadcrumbs className="breadcrumbs">
        <BreadcrumbItem className="breadcrumbs__crumb active">
          <a href="/#">
            <Icon type="popup" iconLeft fill="#ffffff" />
            <Circular fontSize="14px" textTransform="lowercase" color="#ffffff">
              crumbies
            </Circular>
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumbs__crumb">
          <a href="/#">
            <Icon type="integrations" iconLeft fill="#ffffff" />
            <Circular fontSize="14px" textTransform="lowercase" color="#ffffff">
              crumbies
            </Circular>
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumbs__crumb">
          <a href="/#">
            <Icon type="upgrade" iconLeft fill="#ffffff" />
            <Circular fontSize="14px" textTransform="lowercase" color="#ffffff">
              crumbies
            </Circular>
          </a>
        </BreadcrumbItem>
      </Breadcrumbs>
    );
  });
