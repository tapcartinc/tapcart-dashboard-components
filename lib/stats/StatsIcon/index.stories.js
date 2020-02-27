import React, { useState } from "react";
import { StatsIcon } from "./index";
import styled from "styled-components";

import { colorPicker } from "../../../lib";
import { sofiaPro } from "../../utils/_dashVariables";

const StyledIcons = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${sofiaPro.medium};
`;
const StyledIcon = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65px;
  margin: 25px;
  text-align: center;
  line-height: 14px;
  font-size: 12px;
  ${props =>
    props.whiteIcon &&
    `background: ${colorPicker.blue}; border-radius: 3px; color: white; padding: 10px;`}

  svg {
    margin-bottom: 10px;
  }
`;

export default {
  component: StatsIcon,
  title: "Stats/StatsIcon"
};

export const statsIcon = () => {
  return (
    <StyledIcons>
      <StyledIcon>
        <StatsIcon type="orders" />
        orders
      </StyledIcon>
      <StyledIcon>
        <StatsIcon type="session" />
        session
      </StyledIcon>
      <StyledIcon>
        <StatsIcon type="conversion" />
        conversion
      </StyledIcon>
    </StyledIcons>
  );
};
