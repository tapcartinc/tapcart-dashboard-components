import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { TapcartLogo } from "../../lib/elements/TapcartLogo";
import { Container } from "../../lib/layout/Container";
import { ContainerBox, colorPicker } from "../../lib";

export default {
  component: TapcartLogo,
  title: "Design Elements/TapcartLogo",
  parameters: {
    componentSubtitle: "TapcartLogo..."
  },

  decorators: [withKnobs]
};

export const tapcartLogo = () => {
  return (
    <Container>
      <TapcartLogo logoLeft type="black-and-blue" />
      <ContainerBox
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10
        }}
        customHeight={70}
        customWidth={150}
        bg={colorPicker.blue}
      >
        <TapcartLogo logoLeft type="white" />
      </ContainerBox>
    </Container>
  );
};
