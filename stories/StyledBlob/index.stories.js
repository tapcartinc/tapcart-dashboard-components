import React from "react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import { Section } from "../../lib/marketing/Section";
import { StyledBlob } from "../../lib/marketing/StyledBlob";
import { ThemeProvider } from "styled-components";
import { base, invert } from "../../lib/utils/_theme";
import { Header, Subheader } from "../../lib/marketing/Typography";
import { Row } from "../../lib/marketing/Row";
import { Column } from "../../lib/marketing/Column";
import { Container } from "../../lib/marketing/Container";

export default {
  component: StyledBlob,
  title: "Design Elements/StyledBlob",
  parameters: {
    componentSubtitle:
      "Use <StyledBlob/> for any of the consistent blog design elements that you see in each segment"
  },

  decorators: [withKnobs]
};

export const section = () => (
  <ThemeProvider theme={invert(base)}>
    <Section minHeight={400}>
      <StyledBlob
        src="../../public/images/oval.svg"
        alt="oval"
        maxWidth={number("maxWidth", 275)}
        top={boolean("top", false)}
        bottom={boolean("bottom", false)}
        left={boolean("left", false)}
        right={boolean("right", false)}
      />
      <Container>
        <Row>
          <Column cols={1}>
            <Header>Section Header</Header>
            <Subheader>Section Subheader</Subheader>
          </Column>
        </Row>
      </Container>
    </Section>
  </ThemeProvider>
);
