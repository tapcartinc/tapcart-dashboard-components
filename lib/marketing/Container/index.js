import styled from "styled-components";
import media from "../../utils/_media";
import React from "react";
import PropTypes, { node } from "prop-types";
import { sizes } from "../../utils/_sizes";

const ContainerWrapper = styled.section`
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${sizes.xl}px;
  padding-left: 5em;
  padding-right: 5em;
  padding-top: 100px;
  padding-bottom: 100px;
  ${props =>
    props.customPadding &&
    `padding-top: ${props.customPadding[0]}px; padding-bottom: ${props.customPadding[1]}px;`}

  z-index: 1;

  ${props =>
    props.customMargins &&
    `margin-top: ${props.customMargins[0]}px; margin-bottom: ${props.customMargins[1]}px;`}

  button {
    ${props => props.centered && `display: block !important; margin: 0 auto;`}
  }

  ${media.lg`
  padding-left: 2.5em;
  padding-right: 2.5em;
  padding-top: 100px;
  padding-bottom: 100px;

  ${props =>
    props.customPadding &&
    `padding-top: ${props.customPadding[0]}px; padding-bottom: ${props.customPadding[1]}px;`}

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
    `padding-top: ${props.customPaddingMd[0]}px; padding-bottom: ${props.customPaddingMd[1]}px;`}

${props =>
  props.customMarginsMd &&
  `margin-top: ${props.customMarginsMd[0]}px; margin-bottom: ${props.customMarginsMd[1]}px;`}
`};

  ${media.sm`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 80px;
  padding-bottom: 80px;


  ${props =>
    props.customPaddingSm &&
    `padding-top: ${props.customPaddingSm[0]}px; padding-bottom: ${props.customPaddingSm[1]}px;`}


  ${props =>
    props.customMarginsSm &&
    `margin-top: ${props.customMarginsSm[0]}px; margin-bottom: ${props.customMarginsSm[1]}px;`};
  `};

  ${media.xs`
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  ${props =>
    props.customPaddingXs &&
    `padding-top: ${props.customPaddingXs[0]}px; padding-bottom: ${props.customPaddingXs[1]}px;`}

  ${props =>
    props.customMarginsXs &&
    `margin-top: ${props.customMarginsXs[0]}px; margin-bottom: ${props.customMarginsXs[1]}px;`}
  `};

  ${media.unoCardSmall`
  ${props =>
    props.customMarginsXxs &&
    `margin-top: ${props.customMarginsXxs[0]}px; margin-bottom: ${props.customMarginsXxs[1]}px;`}
  `}
`;

/**
 * Use `Container` as the wrapper component of the `Row` component and all of the children within that component.
 */

const Container = props => {
  return <ContainerWrapper {...props} />;
};

export { Container };

Container.propTypes = {
  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * First index is top padding; second index is bottom padding
   */
  customPadding: PropTypes.array,
  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * First index is top padding; second index is bottom padding
   */
  customPaddingMd: PropTypes.array,
  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * First index is top padding; second index is bottom padding
   */
  customPaddingSm: PropTypes.array,
  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * First index is top padding; second index is bottom padding
   */
  customPaddingXs: PropTypes.array,
  /**
   * Control top and bottom margins of a container
   * Cannont change left and right margins of container for consistency purposes
   * First index is top margin; second index is bottom margin
   */
  customMargins: PropTypes.array
};
