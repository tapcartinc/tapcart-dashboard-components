import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { DraftStatus } from "../../lib/elements/DraftStatus";
import { Container } from "../../lib/layout/Container";

export default {
  component: DraftStatus,
  title: "Components/DraftStatus",
  parameters: {
    componentSubtitle: "DraftStatus..."
  },

  decorators: [withKnobs]
};

export const draftStatus = () => {
  return (
    <Container>
      <DraftStatus status="live" />
      <DraftStatus status="scheduled" />
      <DraftStatus />
    </Container>
  );
};
