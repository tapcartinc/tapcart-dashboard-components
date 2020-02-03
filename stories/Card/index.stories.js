import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Card } from "../../lib/layout/Card";
import { Container } from "../../lib/layout/Container";
import { DraftStatus } from "../../lib/elements/DraftStatus";
import { ClickDropdown } from "../../lib/components/ClickDropdown";
import { Body } from "../../lib/elements/Typography";
import styled from "styled-components";
import { circularStd, colorPicker } from "../../lib/utils/_dashVariables";

export default {
  component: Card,
  title: "Components/Card",
  decorators: [withKnobs]
};

const StyledTopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const StyledStatusInfo = styled.div`
  ${circularStd.medium}
  font-size: 10px;
  color: ${colorPicker.gray};
  margin-left: 5px;
`;

const options = [
  {
    title: "Go Live",
    onClick: () => console.log("Go Live"),
    icon: "go-live"
  },
  {
    title: "Edit",
    onClick: () => console.log("Edit"),
    icon: "edit"
  },
  {
    title: "Duplicate",
    onClick: () => console.log("Duplicate"),
    icon: "duplicate"
  },
  {
    title: "Delete",
    onClick: () => console.log("Delete"),
    icon: "trash"
  }
];

export const card = () => (
  <Container
    style={{
      width: "1200",
      flexDirection: "row",
      display: "flex",
      flexWrap: "wrap"
    }}
  >
    <Card
      columns={3}
      image="https://i.imgur.com/8LA1oBL.png"
      onClick={() => console.log("hi")}
    >
      <StyledTopRow>
        <DraftStatus status="live" />
        <StyledStatusInfo>01/28/2020 – 2:30PM</StyledStatusInfo>
      </StyledTopRow>
      <ClickDropdown position="right" options={options} />
      <Body>Swim Resort Drop</Body>
    </Card>
    <Card
      columns={3}
      image="https://i.imgur.com/8LA1oBL.png"
      onClick={() => console.log("hi")}
    >
      <DraftStatus status="scheduled" />
    </Card>
    <Card
      columns={3}
      image="https://i.imgur.com/8LA1oBL.png"
      onClick={() => console.log("hi")}
    >
      <DraftStatus />
    </Card>
  </Container>
);
