import styled from "styled-components";
import media from "../../utils/_media";
import React from "react";
import PropTypes, { node } from "prop-types";
import { sizes } from "../../utils/_sizes";
import { colors } from "../../utils/_variables";

const ContainerWrapper = styled.section`
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${sizes.xl}px;
  padding-left: 5em;
  padding-right: 5em;
  z-index: 1;
  padding-top: 75px;
  padding-bottom: 75px;
  ${props =>
    props.customPadding &&
    `padding-top: ${props.customPadding};
  padding-bottom:${props.customPadding} ;`}
  ${props => props.highlightContainer && `border: 1px solid ${colors.red}`};
  // ${props => props.overflowHidden && `overflow: hidden`};
  button {
    ${props => props.centered && `display: block !important; margin: 0 auto;`}
  }

  ${media.lg`
  padding-left: 2.5em;
  padding-right: 2.5em;
`};

  ${media.md`
  width: 100%;
  margin: 0 auto;
  padding-left: 3em;
  padding-right: 3em;
  padding-top: 100px;
  padding-bottom: 100px;

  ${props =>
    props.customPaddingMd &&
    `padding-top: ${props.customPaddingMd};
  padding-bottom:${props.customPaddingMd} ;`}


`};

  ${media.sm`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 2em;
  padding-right: 2em;

  ${props =>
    props.customPaddingSm &&
    `padding-top: ${props.customPaddingSm};
  padding-bottom:${props.customPaddingSm} ;`}

  `};

  ${media.xs`
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  padding-bottom: 40px;
  padding-top: 40px;

  ${props =>
    props.customPaddingXs &&
    `padding-top: ${props.customPaddingXs};
    padding-bottom:${props.customPaddingXs} ;`}
  `};
`;

/**
 * Use `Container` as the wrapper component of the `Row` component and all of the children within that component.
 */

export const Container = props => {
  return <ContainerWrapper {...props} />;
};

Container.propTypes = {
  overflowHidden: PropTypes.bool
};

Container.defaultProps = {
  overflowHidden: false
};
