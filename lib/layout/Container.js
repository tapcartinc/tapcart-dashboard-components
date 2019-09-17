import React from "react";
import styled from "styled-components";
import { boxShadow } from "../utils/_variables";
import { getColors } from "../utils/_functions";

const ContainerStyle = styled.section`
  border-radius: 3px;
  ${boxShadow};
  background: ${props => (props.bg ? getColors(props.bg) : "white")};
  width: ${props => (props.columns ? `${100 / props.columns - 5}%` : "100%")};
  ${props => (props.style ? props.style : null)}
`;

const Container = props => {
  return <ContainerStyle {...props}>{props.children}</ContainerStyle>;
};

export { Container };
