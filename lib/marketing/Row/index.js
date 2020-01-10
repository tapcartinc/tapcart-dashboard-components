import styled from "styled-components";
import media from "../../utils/_media";
import React from "react";

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  ${props => props.flushLeft && `align-items: flex-start;`}

  ${media.md`
  justify-content: center;
  ${props => props.mobileCentered && `align-items: center;`}
  ${props => props.responsiveReverse && `flex-direction: column-reverse;`}
  `}
`;

const Row = props => {
  return <RowWrapper {...props} />;
};

export { Row };
