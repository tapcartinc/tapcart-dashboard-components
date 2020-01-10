import React from "react";
import {
  withKnobs,
  radios,
  number,
  boolean,
  optionsKnob
} from "@storybook/addon-knobs";
import { Section } from "../../lib/marketing/Section";
import { ThemeProvider } from "styled-components";
import { leftAlign, centered } from "../../lib/utils/_layout";
import { base } from "../../lib/utils/_theme";
import { Header, Subheader } from "../../lib/marketing/Typography";
import { Row } from "../../lib/marketing/Row";
import { Column } from "../../lib/marketing/Column";
import { Container } from "../../lib/marketing/Container";

export default {
  component: Column,
  title: "Layout/Column",
  parameters: {
    componentSubtitle:
      "Wrapper component containing each segment of content from <Container/> to children of <Column/> components"
  },

  decorators: [withKnobs]
};

const label = "layout";
const options = {
  LeftAlign: leftAlign,
  Centered: centered
};
const defaultValue = leftAlign;
const optionsObj = {
  display: "select"
};

export const column = () => (
  <ThemeProvider theme={base}>
    <Section layout={centered}>
      <Container>
        <Row>
          <Column cols={1} style={{ border: "1px solid red" }}>
            <Header>Section Header</Header>
            <Subheader>Section Subheader</Subheader>
          </Column>
        </Row>
      </Container>
    </Section>
  </ThemeProvider>
);

export const twoColumn = () => (
  <ThemeProvider theme={base}>
    <Section layout={centered}>
      <Container>
        <Row>
          <Column cols={2} style={{ border: "1px solid red" }}>
            <Header>Section Header</Header>
            <Subheader>Section Subheader</Subheader>
          </Column>
          <Column cols={2} style={{ border: "1px solid red" }}>
            <Header>Section Header</Header>
            <Subheader>Section Subheader</Subheader>
          </Column>
        </Row>
      </Container>
    </Section>
  </ThemeProvider>
);
