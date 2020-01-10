import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../../lib/elements/Button";
import { Icon } from "../../lib/elements/Icon";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import styled from "styled-components";

export default {
  component: Button,
  title: "Components/Button",
  decorators: [withKnobs]
};

export const allButtons = () => (
  <StyledButtonRow>
    <Button
      type="primary"
      isLoading={boolean("Loading", false)}
      onClick={action("clicked")}
    >
      Primary
    </Button>
    <Button type="secondary" onClick={action("clicked")}>
      Secondary
    </Button>
    <Button type="delete" onClick={action("clicked")}>
      Delete
    </Button>
    <Button type="save" onClick={action("clicked")}>
      Save
    </Button>
    <Button
      type="inverted"
      isLoading={boolean("Loading Button", true)}
      onClick={action("clicked")}
    >
      Loading Button
    </Button>
    <Button
      type="primary--reversed"
      isDisabled={boolean("Disabled Button", true)}
      onClick={action("clicked")}
    >
      Disabled
    </Button>
    <Button type="transparent--white" onClick={action("clicked")}>
      {text("Change Button Text", "Change Button Text")}
    </Button>
    <Button type="inverted--reversed" onClick={action("clicked")}>
      Icon Button <Icon type="design" fill="white" iconRight />
    </Button>
  </StyledButtonRow>
);

export const loading = () => (
  <StyledButtonRow>
    <Button onClick={action("clicked")} isLoading={true} type="primary">
      Loading
    </Button>
    <Button
      onClick={action("clicked")}
      isLoading={true}
      type="primary--reversed"
    >
      Loading
    </Button>
    <Button onClick={action("clicked")} isLoading={true} type="secondary">
      Loading
    </Button>
    <Button
      onClick={action("clicked")}
      isLoading={true}
      type="transparent--blue"
    >
      Loading
    </Button>
    <Button onClick={action("clicked")} isLoading={true} type="save">
      Loading
    </Button>
    <Button
      onClick={action("clicked")}
      isLoading={true}
      type="delete--reversed"
    >
      Loading
    </Button>
    <Button
      onClick={action("clicked")}
      isLoading={true}
      type="secondary--green"
    >
      Loading
    </Button>
  </StyledButtonRow>
);

export const disabled = () => (
  <Button type="primary" isDisabled={true}>
    Disabled
  </Button>
);

const StyledButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  align-items: flex-start;
  button {
    margin-right: 20px;
  }
`;
