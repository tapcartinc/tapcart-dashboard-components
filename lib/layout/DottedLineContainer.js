import React from "react";
import styled from "styled-components";
import { colors } from "../utils/_variables";

const DottedLineContainerStyle = styled.section`
  border-radius: 3px;
  width: 100%;
  border: 1px ${colors.blue50} dashed;
  background: ${colors.offwhite};

  ${props => (props.style ? props.style : null)}
`;

const DottedLineContainer = ({ ...props }) => {
  return (
    <div className="container">
      <DottedLineContainerStyle {...props}>
        {props.children}
      </DottedLineContainerStyle>
    </div>
  );
};

export { DottedLineContainer };
