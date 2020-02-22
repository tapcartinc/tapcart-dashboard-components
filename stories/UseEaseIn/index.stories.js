import React from "react";
import { colorPicker } from "../../lib/utils/_dashVariables";
import { Container } from "../../lib/layout/Container";
import { ContainerBox } from "../../lib/layout/ContainerBox";
import { useEaseIn } from "../../lib/hooks/useEaseIn";
import { EaseIn } from "../../lib/components/EaseIn";
import styled from "styled-components";

export default {
  component: "Use Ease In",
  title: "Hooks/useEaseIn"
};

const StyledColor = styled.div`
  height: 50px;
  width: 50px;
  background: ${colorPicker.blue};
`;

export const useEaseInExample = () => {
  const easedIn = useEaseIn(5000);
  return (
    <Container>
      <EaseIn easedIn={easedIn}>
        <StyledColor />
      </EaseIn>
    </Container>
  );
};
