import styled from "styled-components";

import React from "react";

const ContainerWrapper = styled.section`
  box-sizing: border-box;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  width: 100%;
`;

const Container = props => {
  return <ContainerWrapper {...props} />;
};

export { Container };
