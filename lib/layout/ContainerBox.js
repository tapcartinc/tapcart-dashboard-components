import React from "react";
import styled from "styled-components";
import { boxShadow } from "../utils/_variables";
import { getColors } from "../utils/_functions";
import media from "../utils/_media";
import PropTypes, { node } from "prop-types";

const ContainerStyle = styled.section`
  border-radius: 3px;
  box-shadow: ${props =>
    props.boxShadow ? props.boxShadow : boxShadow.medium};
  background: ${props => (props.bg ? props.bg : "white")};
  height: ${props => props.customHeight && `${props.customHeight}px`};
  ${props => props.padding && `padding: ${props.padding}px`};
  ${props =>
    props.customWidth
      ? `width: ${props.customWidth}px;`
      : props.columns
      ? `width: ${100 / props.columns - 1.5}%`
      : `width: 100%;`}

  ${props => (props.style ? props.style : null)}
`;

const ContainerBox = props => {
  return <ContainerStyle {...props}>{props.children}</ContainerStyle>;
};

export { ContainerBox };

ContainerBox.propTypes = {
  bg: PropTypes.string,
  customHeight: PropTypes.number,
  customWidth: PropTypes.number,
  columns: PropTypes.number,
  padding: PropTypes.number,
  boxShadow: PropTypes.string,
  children: PropTypes.node
};

ContainerBox.defaultProps = {
  bg: "white"
};
