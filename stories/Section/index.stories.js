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
  component: Section,
  title: "Layout/Section",
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

export const section = () => (
  <ThemeProvider theme={base}>
    <Section
      layout={optionsKnob(label, options, defaultValue, optionsObj)}
      overflowHidden={boolean("overflowHidden", true)}
      minHeight={number("minHeight", 800)}
      contentHeight={boolean("contentHeight", false)}
      tombstone={boolean("tombstone", false)}
    >
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
