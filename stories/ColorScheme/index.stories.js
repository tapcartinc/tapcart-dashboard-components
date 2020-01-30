import React from "react";
import { Header, Description, Body } from "../../lib/elements/Typography";
import CodeBlock from "../CodeBlock";
import { colorPicker } from "../../lib/utils/_dashVariables";
import { Container } from "../../lib/layout/Container";
import { ContainerBox } from "../../lib";
import styled from "styled-components";

export default {
  component: "Colors",
  title: "Design Elements/colorPicker"
};

const StyledColor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px auto;
`;

export const colors = () => (
  <Container>
    {Object.entries(colorPicker).map(color => {
      return (
        <StyledColor key={color[0]}>
          <ContainerBox
            bg={color[1]}
            customHeight={35}
            customWidth={35}
            style={{ marginRight: 10 }}
          />
          <Description>{color[0]}</Description>
        </StyledColor>
      );
    })}
  </Container>
);

const codeString = `element {
  color: \$\{colorPicker.blue}\

}
`;

export const applyingColors = () => {
  return (
    <Container>
      <Header>Sofia</Header>
      <Body color={colorPicker.gray} style={{ marginTop: 20 }}>
        Example:
      </Body>
      <CodeBlock value={codeString} />
    </Container>
  );
};
