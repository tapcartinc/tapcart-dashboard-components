import React from "react";
import { Header, Description, Body } from "../../lib/elements/Typography";
import CodeBlock from "../CodeBlock";
import { colorPicker } from "../../lib/utils/_dashVariables";
import { Container } from "../../lib/layout/Container";

export default {
  component: Typography,
  title: "Design Elements/Typography"
};

export const Typography = () => (
  <Container>
    <Header>Header</Header>
    <Description>Description</Description>
    <Body>Body</Body>
  </Container>
);

const codeString = `element {
  \$\{sofiaPro.regular}\

}
`;

const codeStringTwo = `element {
  \$\{circularStd.book}\

}
`;

export const applyingFontStyle = () => {
  return (
    <Container>
      <Header>Sofia</Header>
      <Body color={colorPicker.gray} style={{ marginTop: 20 }}>
        Example:
      </Body>
      <CodeBlock value={codeString} />

      <Description style={{ lineHeight: "24px" }}>
        - Sofia Pro Regular: {`\$\{sofiaPro.regular}\ `} || font-weight: 400
        <br />- Sofia Pro Medium: {`\$\{sofiaPro.medium}\ `} || font-weight: 500
        <br />- Sofia Pro Light: {`\$\{sofiaPro.light}\ `} || font-weight: 300
        <br />- Sofia Pro Bold: {`\$\{sofiaPro.bold}\ `} || font-weight: bold
        <br />- Sofia Pro SemiBold: {`\$\{sofiaPro.semiBold}\ `} || font-weight:
        600
        <br />
      </Description>
      <br />
      <br />
      <br />
      <Header>CircularStd</Header>
      <Body color={colorPicker.gray} style={{ marginTop: 20 }}>
        Example:
      </Body>
      <CodeBlock value={codeStringTwo} />

      <Description style={{ lineHeight: "24px" }}>
        - Circular Std Medium: {`\$\{circularStd.medium}\ `} || font-weight: 500
        <br />- Circular Std Medium: {`\$\{circularStd.book}\ `} || font-weight:
        400
        <br />- Circular Std Medium Italic: {`\$\{circularStd.mediumItalic}\ `}
        || font-weight: 500
        <br />- Circular Std Bold: {`\$\{circularStd.bold}\ `} || font-weight:
        bold
        <br />- Circular Std Black: {`\$\{circularStd.black}\ `} || font-weight:
        800
        <br />
      </Description>
    </Container>
  );
};
