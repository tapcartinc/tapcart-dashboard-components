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
      kind="primary"
      isLoading={boolean("Loading", false)}
      onClick={action("clicked")}
    >
      Primary
    </Button>
    <Button kind="transparent--blue">Primary</Button>
    <Button kind="secondary" onClick={action("clicked")}>
      Secondary
    </Button>
    <Button kind="delete" onClick={action("clicked")}>
      Delete
    </Button>
    <Button kind="save" onClick={action("clicked")}>
      Save
    </Button>
    <Button
      kind="inverted"
      isLoading={boolean("Loading Button", true)}
      onClick={action("clicked")}
    >
      Loading Button
    </Button>
    <Button
      kind="primary--reversed"
      isDisabled={boolean("Disabled Button", true)}
      onClick={action("clicked")}
    >
      Disabled
    </Button>
    <Button kind="transparent--white" onClick={action("clicked")}>
      {text("Change Button Text", "Change Button Text")}
    </Button>
    <Button kind="inverted--reversed" onClick={action("clicked")}>
      Icon Button <Icon kind="design" fill="white" iconRight />
    </Button>

    <Button kind="primary--reversed" onClick={action("clicked")}>
      Go&nbsp;Live
    </Button>
  </StyledButtonRow>
);

export const loading = () => (
  <StyledButtonRow>
    <Button onClick={action("clicked")} isLoading={true} kind="primary">
      Loading
    </Button>
    <Button
      onClick={action("clicked")}
      isLoading={true}
      kind="primary--reversed"
    >
      Loading
    </Button>
    <Button onClick={action("clicked")} isLoading={true} kind="secondary">
      Loading
    </Button>
    <Button
      onClick={action("clicked")}
      isLoading={true}
      kind="transparent--blue"
    >
      Loading
    </Button>
    <Button onClick={action("clicked")} isLoading={true} kind="save">
      Loading
    </Button>
    <Button
      onClick={action("clicked")}
      isLoading={true}
      kind="delete--reversed"
    >
      Loading
    </Button>
    <Button
      onClick={action("clicked")}
      isLoading={true}
      kind="secondary--green"
    >
      Loading
    </Button>
  </StyledButtonRow>
);

export const disabled = () => (
  <Button kind="primary" isDisabled={true}>
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
