import React from "react";
import styled from "styled-components";
import { BreadcrumbsItem } from "./BreadcrumbItem";
import PropTypes from "prop-types";

const Breadcrumbs = ({ crumbs }) => {
  return (
    <BreadcrumbsStyle>
      {crumbs.map((item, index) => {
        return (
          <BreadcrumbsItem
            key={item.crumb}
            onClick={item.onClick}
            crumb={item.crumb}
            icon={item.icon}
            index={index}
            active={crumbs.length - 1 === index}
            hasSeparator={item.hasSeparator}
          />
        );
      })}
    </BreadcrumbsStyle>
  );
};

const BreadcrumbsStyle = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 45px;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 10px;
  ${props => (props.style ? props.style : null)}
`;

export { Breadcrumbs };

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Crumb label
       */
      crumb: PropTypes.string.isRequired,
      /**
       * Icon that displays to the left of the crumb; optional
       */
      icon: PropTypes.string,
      /**
       * onClick functiont that gets called when selecting a breadcrumb
       */
      onClick: PropTypes.func,
      /**
       * The active page in the breadcrumbs list
       */
      active: PropTypes.bool
    })
  ).isRequired
};
