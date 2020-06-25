import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/_variables";
import { BreadcrumbsItem } from "./BreadcrumbItem";
import PropTypes, { node } from "prop-types";
import media from "../../utils/_media";

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
  padding-top: 20px;
  padding-bottom: 0px;
  font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif;
  font-weight: 400;

  ${props => (props.style ? props.style : null)}
`;

export { Breadcrumbs };

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      crumb: PropTypes.string.isRequired,
      icon: PropTypes.string,
      onClick: PropTypes.func,
      /**
       * The active page in the breadcrumbs list
       */
      active: PropTypes.bool
    })
  ).isRequired
};
