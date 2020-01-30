import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Card } from "../../lib/layout/Card";
import { Container } from "../../lib/layout/Container";
import { DraftStatus } from "../../lib/elements/DraftStatus";
import { ClickDropdown } from "../../lib/components/ClickDropdown";

export default {
  component: Card,
  title: "Components/Card",
  decorators: [withKnobs]
};

export const card = () => (
  <Container
    style={{
      width: "1200",
      border: "1px solid red",
      flexDirection: "row",
      display: "flex",
      flexWrap: "wrap"
    }}
  >
    <Card
      image="https://i.imgur.com/8LA1oBL.png"
      onClick={() => console.log("hi")}
    >
      <DraftStatus status="live" />
      <ClickDropdown></ClickDropdown>
    </Card>
    <Card
      image="https://i.imgur.com/8LA1oBL.png"
      onClick={() => console.log("hi")}
    >
      <DraftStatus status="scheduled" />
    </Card>
    <Card
      image="https://i.imgur.com/8LA1oBL.png"
      onClick={() => console.log("hi")}
    >
      <DraftStatus />
    </Card>
  </Container>
);
