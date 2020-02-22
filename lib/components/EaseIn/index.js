import React from "react";
import styled from "styled-components";

const EaseIn = props => {
  return <StyledEaseIn easedIn={props.easedIn}>{props.children}</StyledEaseIn>;
};
export { EaseIn };

const StyledEaseIn = styled.div`
  height: auto;
  width: auto;
  opacity: 0;
  transition: opacity ease-in 0.5s;

  ${props =>
    props.easedIn &&
    `
  opacity: 1;
`}
`;
