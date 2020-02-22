import styled from "styled-components";
import media from "../../utils/_media";

import React from "react";

const ContainerWrapper = styled.section`
  box-sizing: border-box;
  position: relative;
  padding-left: 45px;
  padding-top: 35px;
  padding-right: 45px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  ${props => props.paddingTop && `padding-top: ${props.paddingTop}`};

  ${props => (props.style ? props.style : null)}
`;

const Container = props => {
  return <ContainerWrapper {...props} />;
};

export { Container };
