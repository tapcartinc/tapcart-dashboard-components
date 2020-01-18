import React from "react";
import { action } from "@storybook/addon-actions";
import { Link } from "../../lib/elements/Link";
import { Icon } from "../../lib/elements/Icon";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import styled from "styled-components";

export default {
  component: Link,
  title: "Components/Link",
  decorators: [withKnobs]
};

export const allLinks = () => (
  <StyledLinkRow>
    <Link
      color="blue"
      isLoading={boolean("Loading", false)}
      onClick={action("clicked")}
    >
      Primary
    </Link>
    <Link type="secondary" onClick={action("clicked")}>
      Secondary
    </Link>
    <Link type="delete" onClick={action("clicked")}>
      Delete
    </Link>
    <Link type="save" onClick={action("clicked")}>
      Save
    </Link>
    <Link
      type="inverted"
      isLoading={boolean("Loading Link", true)}
      onClick={action("clicked")}
    >
      Loading Link
    </Link>
    <Link
      type="primary--reversed"
      isDisabled={boolean("Disabled Link", true)}
      onClick={action("clicked")}
    >
      Disabled
    </Link>
    <Link type="transparent--white" onClick={action("clicked")}>
      {text("Change Link Text", "Change Link Text")}
    </Link>
  </StyledLinkRow>
);

const StyledLinkRow = styled.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  align-items: flex-start;
  button {
    margin-right: 20px;
  }
`;
