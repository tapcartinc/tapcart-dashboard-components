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
  border-bottom: 1px solid ${colors.gray25};
  border-top: 1px solid ${colors.gray25};
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 20px;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 10px;
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
  The person being quoted in the current QuoteContainer
  */
      active: PropTypes.bool
    })
  )
};
