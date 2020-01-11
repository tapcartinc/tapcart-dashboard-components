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
  ${props => props.customPadding && `padding: ${props.customPadding}px 5em`};
  padding-top: ${props =>
    props.customPaddingTop ? `${props.customPaddingTop}px` : "75px"};
  padding-bottom: ${props =>
    props.customPaddingBottom ? `${props.customPaddingBottom}px` : "75px"};
  z-index: 1;

  ${props =>
    props.customMargins &&
    `margin-top: ${props.customMargins[0]}px; margin-bottom: ${props.customMargins[1]}px`};

  button {
    ${props => props.centered && `display: block !important; margin: 0 auto;`}
  }

  ${media.lg`
  padding-left: 2.5em;
  padding-right: 2.5em;
  ${props => props.customPadding && `padding: ${props.customPadding}px 2.5em`};
  padding-top: ${props =>
    props.customPaddingTop ? `${props.customPaddingTop}px` : "75px"};
  padding-bottom: ${props =>
    props.customPaddingBottom ? `${props.customPaddingBottom}px` : "75px"};


`};

  ${media.md`
  width: 100%;
  margin: 0 auto;
  padding-left: 3em;
  padding-right: 3em;
  ${props =>
    props.customPaddingMd && `padding: ${props.customPaddingMd}px 3em`};

  padding-top: ${props =>
    props.customPaddingTopMd ? `${props.customPaddingTopMd}px` : "100px"};
  padding-bottom: ${props =>
    props.customPaddingBottomMd ? `${props.customPaddingBottomMd}px` : "100px"};

${props =>
  props.customMarginsMd &&
  `margin-top: ${props.customMarginsMd[0]}px; margin-bottom: ${props.customMarginsMd[1]}px`};
`};

  ${media.sm`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 2em;
  padding-right: 2em;

  ${props =>
    props.customPaddingSm && `padding: ${props.customPaddingSm}px 2em`};

  padding-top: ${props =>
    props.customPaddingTopSm ? `${props.customPaddingTopSm}px` : "100px"};
  padding-bottom: ${props =>
    props.customPaddingBottomSm ? `${props.customPaddingBottomSm}px` : "100px"};

  ${props =>
    props.customMarginsSm &&
    `margin-top: ${props.customMarginsSm[0]}px; margin-bottom: ${props.customMarginsSm[1]}px`};
  `};

  ${media.xs`
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;

  ${props =>
    props.customPaddingXs && `padding: ${props.customPaddingXs}px 1em`};

  padding-top: ${props =>
    props.customPaddingTopXs ? `${props.customPaddingTopXs}px` : "40px"};
  padding-bottom: ${props =>
    props.customPaddingBottomXs ? `${props.customPaddingBottomXs}px` : "40px"};

  ${props =>
    props.customMarginsXs &&
    `margin-top: ${props.customMarginsXs[0]}px; margin-bottom: ${props.customMarginsXs[1]}px`};
  `};

  ${media.unoCardSmall`
  ${props =>
    props.customMarginsXxs &&
    `margin-top: ${props.customMarginsXxs[0]}px; margin-bottom: ${props.customMarginsXxs[1]}px`};
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
   * MUST BE GREATER THAN 0!!!
   */
  customPadding: PropTypes.number,
  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * MUST BE GREATER THAN 0!!!
   */
  customPaddingMd: PropTypes.number,
  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * MUST BE GREATER THAN 0!!!
   */
  customPaddingSm: PropTypes.number,
  /**
   * Control top and bottom padding of a container
   * Cannont change left and right padding of container for consistency purposes
   * MUST BE GREATER THAN 0!!!
   */
  customPaddingXs: PropTypes.number,
  /**
   * Control top and bottom margins of a container
   * Cannont change left and right margins of container for consistency purposes
   * First index is top margin; second index is bottom margin
   * MUST BE GREATER THAN 0!!!
   */
  customMargins: PropTypes.array
};
