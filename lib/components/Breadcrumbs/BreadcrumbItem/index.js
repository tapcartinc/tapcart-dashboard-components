import React from "react";
import styled from "styled-components";
import { Icon } from "../../../elements/Icon";
import { colors } from "../../../utils/_variables";
import PropTypes from "prop-types";
import media from "../../../utils/_media";
import { colorPicker } from "../../../utils/_dashVariables";

const BreadcrumbsItem = ({ crumb, icon, onClick, active, index }) => {
  return (
    <StyledCrumb>
      {index !== 0 ? (
        <Icon
          type="arrow-right"
          iconLeft
          iconRight
          style={{ marginRight: 15 }}
          fill={active ? colorPicker.gray : colorPicker.blue}
        />
      ) : null}

      <BreadcrumbsItemStyle onClick={onClick} active={active}>
        {icon ? (
          <Icon
            type={icon}
            iconLeft
            fill={colorPicker.gray}
            style={{ height: 18, marginRight: 15, marginTop: 2 }}
          />
        ) : null}
        <span>{crumb}</span>
      </BreadcrumbsItemStyle>
    </StyledCrumb>
  );
};

const BreadcrumbsItemStyle = styled.li`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 7px;
  font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.6;
  letter-spacing: 1px;
  font-size: 14px;
  margin-right: 0px;
  margin-left: 0px;
  line-height: 34px;
  color: ${props => (props.active ? colorPicker.blue : colorPicker.gray)};
  span {
    margin-left: -5px;
    height: 100%;
  }
  transition: all 0.2s ease-in-out;
  ${props =>
    !props.active &&
    `  &:hover {
  transform: translateY(-2px);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}`}
  ${props => (props.style ? props.style : null)};
`;

const StyledCrumb = styled.div`
  align-items: center;
  display: flex;
`;

export { BreadcrumbsItem };
