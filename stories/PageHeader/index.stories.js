import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { PageHeader } from "../../lib/layout/PageHeader";
import { colors } from "../../lib/utils/_variables";
import { colorPicker } from "../../lib/utils/_dashVariables";
import { Container } from "../../lib/layout/Container";

export default {
  component: PageHeader,
  title: "Layout/PageHeader",
  parameters: {
    componentSubtitle: "PageHeader subtitle placeholder"
  },

  decorators: [withKnobs]
};

export const pageHeader = () => {
  return (
    <PageHeader
      header="Reivew your listing & submit your Android app"
      description="As soon as we receive and process your Apple Developer account we will submit your iOS app on your behalf. "
    >
      <div
        style={{
          width: 257,
          height: 62,
          backgroundColor: colorPicker.lightBlue,
          textAlign: "center",
          color: colorPicker.blue
        }}
      >
        We will submit your iOS app once we receive your invitation.
      </div>
    </PageHeader>
  );
};
