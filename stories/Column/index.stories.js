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
import { boxShadow } from "../../lib/utils/_variables";

export default {
  component: Column,
  title: "Layout/Column",
  parameters: {
    componentSubtitle: "Use `Column` inside of Rows"
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
          <Column
            flushLeft={boolean("flushLeft", false)}
            mobileCentered={boolean("mobileCentered", false)}
            cols={number("number", 1)}
            style={{ border: `1px solid red` }}
          >
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
        <Row flushLeft responsiveReverse>
          <Column
            flushLeft={boolean("flushLeft", false)}
            mobileCentered={boolean("mobileCentered", false)}
            cols={number("number", 1)}
            mobileCols={number("number", 1)}
            customWidth={number("customWidth", 42)}
            customWidthMd={number("customWidthMd", 100)}
            customWidthSm={number("customWidthSm", 100)}
            style={{ border: `1px solid red` }}
          >
            <Header>Section Header</Header>
            <Subheader>Section Subheader</Subheader>
          </Column>
          <Column
            flushLeft={boolean("flushLeft", false)}
            mobileCentered={boolean("mobileCentered", false)}
            cols={number("number", 1)}
            mobileCols={number("number", 1)}
            customWidth={number("customWidth", 42)}
            customWidthMd={number("customWidthMd", 100)}
            customWidthSm={number("customWidthSm", 100)}
            style={{ border: "1px solid pink" }}
          >
            <Header>Section Header</Header>
            <Subheader>Section Subheader</Subheader>
          </Column>
        </Row>
      </Container>
    </Section>
  </ThemeProvider>
);
export const threeColumn = () => (
  <ThemeProvider theme={base}>
    <Section layout={centered}>
      <Container>
        <Row flushLeft responsiveReverse>
          <Column
            flushLeft={boolean("flushLeft", false)}
            mobileCentered={boolean("mobileCentered", false)}
            cols={number("number", 3)}
            mobileCols={number("number", 1)}
            style={{ border: `1px solid red` }}
          >
            <Header>Section Header</Header>
            <Subheader>Section Subheader</Subheader>
          </Column>
          <Column
            flushLeft={boolean("flushLeft", false)}
            mobileCentered={boolean("mobileCentered", false)}
            cols={number("number", 3)}
            mobileCols={number("number", 1)}
            style={{ border: "1px solid pink" }}
          >
            <Header>Section Header</Header>
            <Subheader>Section Subheader</Subheader>
          </Column>
          <Column
            flushLeft={boolean("flushLeft", false)}
            mobileCentered={boolean("mobileCentered", false)}
            cols={number("number", 3)}
            mobileCols={number("number", 1)}
            style={{ border: "1px solid pink" }}
          >
            <Header>Section Header</Header>
            <Subheader>Section Subheader</Subheader>
          </Column>
        </Row>
      </Container>
    </Section>
  </ThemeProvider>
);
