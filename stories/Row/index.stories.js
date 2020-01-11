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
  component: Row,
  title: "Layout/Row",
  parameters: {
    componentSubtitle:
      "Components that holds the columns and is important for the different breakpoint layouts"
  },
  decorators: [withKnobs]
};

export const container = () => (
  <ThemeProvider theme={base}>
    <Section layout={leftAlign} minHeight={300}>
      <Container customPadding={1}>
        <Row
          flushLeft={boolean("flushLeft", false)}
          mobileCentered={boolean("mobileCentered", false)}
          responsiveReverse={boolean("responsiveReverse", false)}
          responsiveReverse={boolean("responsiveReverse", false)}
          noWrap={boolean("noWrap", false)}
        >
          <Column cols={2} mobileCols={1}>
            <Header>Section one</Header>
            <Subheader>Section Subheader</Subheader>
          </Column>
          <Column cols={2} mobileCols={1}>
            <Header>Section two</Header>
            <Subheader>Section Subheader</Subheader>
          </Column>
        </Row>
      </Container>
    </Section>
  </ThemeProvider>
);
