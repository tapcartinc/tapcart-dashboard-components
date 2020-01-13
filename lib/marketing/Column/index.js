import styled from "styled-components";
import media from "../../utils/_media";
import React from "react";
import PropTypes, { node } from "prop-types";

const ColumnWrapper = styled.section`
  box-sizing: border-box;
  min-height: 1px;
  position: relative;
  flex: 0 0 ${props => 100 / props.cols}%;
  max-width: ${props => 100 / props.cols}%;
  right: auto;
  left: auto;
  ${props =>
    props.customWidth &&
    `max-width: ${props.customWidth}%; flex: 0 0 ${props.customWidth}%`};

  ${props => props.centered && `margin: 0 auto;`};

  ${props =>
    props.flushLeft &&
    `display: flex; flex-direction: column; align-items: flex-start; flex-wrap: wrap`};

  ${media.lg`
  ${props =>
    props.customWidthLg &&
    `max-width: ${props.customWidthLg}%; flex: 0 0 ${props.customWidthLg}%`};
  `}

  ${media.md`
  flex: 0 0 ${props => 100 / props.mobileCols}%;
  max-width: ${props => 100 / props.mobileCols}%;
  width: ${props => 100 / props.mobileCols}%;
  margin: 0 auto;
  ${props =>
    props.customWidthMd &&
    `max-width: ${props.customWidthMd}%; flex: 0 0 ${props.customWidthMd}%`};

  ${props => props.mobileCentered && `align-items: center; display: flex;`}
  `}

  ${media.sm`
  ${props =>
    props.customWidthSm &&
    `max-width: ${props.customWidthSm}%; flex: 0 0 ${props.customWidthSm}%`};
  `}

  ${media.xs`
  ${props =>
    props.customWidthXs &&
    `max-width: ${props.customWidthXs}%; flex: 0 0 ${props.customWidthXs}%`};
  `}
`;

/**
 * Allows each `Row` to break responsively
 * */

const Column = props => {
  return <ColumnWrapper {...props} />;
};

export { Column };

Column.propTypes = {
  /**
   * The amount of columns inside of the current row
   */
  cols: PropTypes.number.isRequired,
  /**
   * The amount of columns inside of the mobile row; allows you to tell the column to fill the entire width of the row
   */
  mobileCols: PropTypes.number,
  customWidth: PropTypes.number,
  customWidthMd: PropTypes.number,
  customWidthSm: PropTypes.number,
  customWidthXs: PropTypes.number,
  flushLeft: PropTypes.bool,
  centered: PropTypes.bool
};

Column.defaultProps = {
  flushLeft: false
};
