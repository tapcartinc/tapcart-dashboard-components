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
  display: flex;
  flex-direction: column;
  align-items: flex-start;



  ${props => props.customWidth && `max-width: ${props.customWidth}%`};

  ${props =>
    props.flushLeft &&
    `display: flex; flex-direction: column; align-items: flex-start; flex-wrap: wrap`};

  ${media.lg`
  ${props => props.customWidthLg && `max-width: ${props.customWidthLg}%`};
  `}

  ${media.md`
  flex: 0 0 ${props => 100 / props.mobileCols}%;
  max-width: ${props => 100 / props.mobileCols}%;
  width: ${props => 100 / props.mobileCols}%;
  margin: 0 auto;
  ${props => props.customWidthMd && `max-width: ${props.customWidthMd}%`};

  ${props => props.mobileCentered && `align-items: center; display: flex;`}
  `}

  ${media.sm`
  ${props => props.customWidthSm && `max-width: ${props.customWidthSm}%`};
  `}

  ${media.xs`
  ${props => props.customWidthXs && `max-width: ${props.customWidthXs}%`};
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
  customWidthLg: PropTypes.number,
  customWidthMd: PropTypes.number,
  customWidthSm: PropTypes.number,
  customWidthXs: PropTypes.number,
  flushLeft: PropTypes.bool
};

Column.defaultProps = {
  flushLeft: false
};
