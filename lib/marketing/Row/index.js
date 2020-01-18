import styled from "styled-components";
import media from "../../utils/_media";
import React from "react";
import PropTypes, { node } from "prop-types";

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  ${props => props.positionRelative && `position: relative;`}
  ${props => props.noWrap && `flex-wrap: nowrap;`}
  ${props => props.flushLeft && `align-items: flex-start;`}

  ${media.md`
  justify-content: center;
  ${props =>
    props.mobileCentered &&
    `align-items: center; flex-direction: column; margin: 0 auto;`}

  ${props =>
    props.responsiveReverse &&
    `section:nth-of-type(2){order: 1;}section:nth-of-type(1){order: 2;margin-top: 40px;}`}
  `}
`;

const Row = props => {
  return <RowWrapper {...props} />;
};

export { Row };

Row.propTypes = {
  /**
   * Justifies columns starting at the left side of the row
   */
  flushLeft: PropTypes.bool,
  /**
   * Centers columns on a mobile screen. Useful for those Rows that align left on desktop
   */
  mobileCentered: PropTypes.bool,
  /**
   * Switches the order of the columns starting at medium breakpoint
   * Only to be used with two columns
   * Specifically for segments with context and graphics to the side
   */
  responsiveReverse: PropTypes.bool,
  /**
   * Prevents row from wrapping; useful for keeping elements together such as logos in the TrustedBy section on the landing page
   */
  noWrap: PropTypes.bool,
  /**
   * Useful for rows that have a column that needs to be positioned absolute
   */
  positionRelative: PropTypes.bool
};

Row.defaultProps = {
  flushLeft: false,
  mobileCentered: false,
  responsiveReverse: false,
  noWrap: false
};
