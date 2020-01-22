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
      : `width: 100%;`};

  ${media.md`
  ${props => props.paddingMd && `padding: ${props.paddingMd}px`};
  ${props =>
    props.customWidthMd
      ? `width: ${props.customWidthMd}px;`
      : props.mobileColumns
      ? `width: ${100 / props.mobileColumns - 1.5}%`
      : `width: 100%;`};
  `};

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
  /**
   * creates automatic width dependig on the amount of columns there are
   */
  columns: PropTypes.number,
  customWidthMd: PropTypes.number,
  /**
   * creates automatic width dependig on the amount of columns there are for tablet and mobile breakpoints
   */
  mobileColumns: PropTypes.number,
  padding: PropTypes.number,
  paddingMd: PropTypes.number,
  boxShadow: PropTypes.string,
  children: PropTypes.node
};

ContainerBox.defaultProps = {
  bg: "white",
  boxShadow: `0 2px 10px 0 rgba(0, 0, 0, 0.05),
  0 2px 20px 0 rgba(0, 0, 0, 0.025),
  0 2px 30px 0 rgba(0, 0, 0, 0.025)`
};

// ${media.smxs`
//  ${props => props.mobile && `width: ${100 / props.mobile}%;`}
// `};
