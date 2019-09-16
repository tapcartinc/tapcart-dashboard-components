import React from "react";
import styled from "styled-components";
import { colors } from "../utils/_variables";
import { Icon } from "../utils/_variables";

function Breadcrumbs(props) {
  return (
    <BreadcrumbsStyle>
      {props.crumbs.map((item, index) => {
        return (
          <BreadcrumbsItem
            key={item.crumb}
            onClick={item.onClick}
            crumb={item.crumb}
            icon={item.icon}
            selected={props.crumbs.length - 1 === index}
            hasSeparator={item.hasSeparator}
          />
        );
      })}
    </BreadcrumbsStyle>
  );
}

function BreadcrumbsItem(props) {
  return (
    <BreadcrumbsItemStyle onClick={props.onClick}>
      {props.icon ? <div style={{ marginRight: 15 }}>{props.icon}</div> : null}
      {props.crumb}
      {props.hasSeparator && (
        <Icon
          type="arrow-right"
          style={{ marginLeft: 20, height: 10 }}
          fill="gray"
        />
      )}
    </BreadcrumbsItemStyle>
  );
}

const BreadcrumbsStyle = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid ${colors.lightgray};
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 20px;
  ${props => (props.style ? props.style : null)}
`;

const BreadcrumbsItemStyle = styled.li`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-family: CircularStd-Book;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 13px;
  margin-right: 0px;
  margin-left: 10px;
  color: #d8d8d8;
  &:hover {
    cursor: pointer;
  }
  ${props => (props.style ? props.style : null)};
`;

export { Breadcrumbs };
