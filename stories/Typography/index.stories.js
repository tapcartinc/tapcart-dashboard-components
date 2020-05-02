import React from "react";
import {
  Header,
  Description,
  Body,
  Sofia,
  Circular,
  Label,
} from "../../lib/elements/Typography";
import CodeBlock from "../CodeBlock";
import { colorPicker } from "../../lib/utils/_dashVariables";
import { Container } from "../../lib/layout/Container";

export default {
  component: "Typography",
  title: "Design Elements/Typography",
  parameters: {
    componentSubtitle:
      '<Header/>, <Description/>, and <Body/> all can receive color as a prop to change the default settings seen above. They also can receive "align" as a prop with the options of "center" and "left" to adjust text-alignment. If no "align" prop is provided the default alignment is that of the parent component.',
    // docs: { storyDescription: "4 sizes are supported." }
  },
};

export const TypographyStyles = () => (
  <Container>
    <Header>Header</Header>
    <Description>Description</Description>
    <Body>Body</Body>
    <Sofia>Sofia</Sofia>
    <Circular>Circular</Circular>
    <br />
    <br />
    <br />
    <Header align="center" color={colorPicker.black}>
      Header: Custom color and alignment example
    </Header>
    <Description color={colorPicker.red}>
      Description: Custom color example
    </Description>
    <Body color={colorPicker.gray}>Body: Custom color example</Body>
    <Body color={colorPicker.gray}>Body: Custom color example</Body>
  </Container>
);

TypographyStyles.story = {
  parameters: {
    notes: "A small component",
  },
};

const codeString = `element {
  \$\{sofiaPro.regular}\

}
`;

const codeStringTwo = `element {
  \$\{circularStd.book}\

}
`;

const codeStringThree = `element {
  font-family: "SofiaPro-Medium";
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

element {
  font-family: "SofiaPro-Bold";
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

element {
  font-family: "SofiaPro-Light";
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

element {
  font-family: "SofiaPro-SemiBold";
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

element {
  font-family: "SofiaPro";
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
`;

const codeStringFour = `element {
  font-family: "CircularStd-Bold";
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

element {
  font-family: "CircularStd-Medium";
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

element {
  font-family: "CircularStd-Book";
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

element {
  font-family: "CircularStd-MediumItalic";
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

`;

export const ApplyingFontStyle = () => {
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
      <br />
      <br />
      <br />
      <Header>Using fonts styles outside of styled components</Header>
      <Header style={{ marginTop: 20 }} color={colorPicker.green100}>
        Sofia
      </Header>
      <Body color={colorPicker.gray} style={{ marginTop: 20 }}>
        Example:
      </Body>
      <CodeBlock value={codeStringThree} />

      <Header style={{ marginTop: 20 }} color={colorPicker.green100}>
        CircularStd
      </Header>
      <Body color={colorPicker.gray} style={{ marginTop: 20 }}>
        Example:
      </Body>
      <CodeBlock value={codeStringFour} />
    </Container>
  );
};

export const FontComponents = () => {
  return (
    <Container>
      <Header align="left">Sofia</Header>
      <Sofia align="left" color={colorPicker.gray} style={{ marginTop: 20 }}>
        props: fontSize, lineHeight, color, light, regular, medium, bold, align:
        ['left' or 'right']
      </Sofia>
      <Circular align="left" color={colorPicker.gray} style={{ marginTop: 20 }}>
        props: fontSize, lineHeight, color, book, medium, bold, align: ['left'
        or 'right']
      </Circular>
    </Container>
  );
};
