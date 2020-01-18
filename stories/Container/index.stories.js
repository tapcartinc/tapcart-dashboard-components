import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { Section } from "../../lib/marketing/Section";
import { ThemeProvider } from "styled-components";
import { leftAlign, centered } from "../../lib/utils/_layout";
import { base } from "../../lib/utils/_theme";
import { Header, Subheader } from "../../lib/marketing/Typography";
import { Row } from "../../lib/marketing/Row";
import { Column } from "../../lib/marketing/Column";
import { Container } from "../../lib/marketing/Container";

export default {
  component: Container,
  title: "Layout/Container",
  parameters: {
    componentSubtitle:
      "Wrapper component that adds the correct amount of padding around the content from desktop to mobile screens"
  },

  decorators: [withKnobs]
};

export const container = () => (
  <ThemeProvider theme={base}>
    <Section layout={centered} minHeight={400}>
      <Container customPadding={[1, 1]} style={{ border: "1px solid red" }}>
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
