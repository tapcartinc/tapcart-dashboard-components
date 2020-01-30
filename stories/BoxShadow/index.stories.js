import React from "react";
import { Header, Description, Body } from "../../lib/elements/Typography";
import CodeBlock from "../CodeBlock";
import { colorPicker } from "../../lib/utils/_dashVariables";
import { boxShadow } from "../../lib/utils/_variables";
import { Container } from "../../lib/layout/Container";
import { ContainerBox } from "../../lib";
import styled from "styled-components";

export default {
  component: "Box Shadow",
  title: "Design Elements/Box Shadow"
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px auto;
`;

export const boxShadowStyles = () => (
  <StyledContainer>
    <ContainerBox
      customHeight={100}
      customWidth={100}
      style={{ marginRight: 30, boxShadow: boxShadow.large }}
    >
      <Description>Large</Description>
    </ContainerBox>
    <ContainerBox
      customHeight={100}
      customWidth={100}
      style={{ marginRight: 30, boxShadow: boxShadow.medium }}
    >
      <Description>Medium</Description>
    </ContainerBox>
    <ContainerBox
      customHeight={100}
      customWidth={100}
      style={{ marginRight: 30, boxShadow: boxShadow.small }}
    >
      <Description>Small</Description>
    </ContainerBox>
  </StyledContainer>
);

const codeString = `element {
  box-shadow: \$\{boxShadow.medium}\

}
`;

export const applyingBoxShadows = () => {
  return (
    <Container>
      <Body color={colorPicker.gray}>Example:</Body>
      <CodeBlock value={codeString} />
    </Container>
  );
};
