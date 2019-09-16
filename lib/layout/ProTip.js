import React from "react";
import styled from "styled-components";
import { colors, sofia } from "../utils/_variables";

const ProTip = props => {
  return (
    <ProTipStyle {...props}>
      <span>Pro Tip:</span>
      <span>{props.tip}</span>
      {props.children}
    </ProTipStyle>
  );
};

const ProTipStyle = styled.div`
  font-size: 15px;
  ${sofia.sofiaItalic};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  line-height: 20px;
  padding: 10px;
  border: 1px solid ${colors.green};
  border-radius: 3px;
`;

export { ProTip };
