import React from "react";
import PropTypes from "prop-types";
import { StyledBreadcrumbWrapper } from "./styles";

const BreadcrumbsV2 = ({ children, ...rest }) => {
  return (
    <StyledBreadcrumbWrapper {...rest}>
      <ol>{children}</ol>
    </StyledBreadcrumbWrapper>
  );
};
export default BreadcrumbsV2;

BreadcrumbsV2.propTypes = {
  /**
   * Pass in the BreadcrumbItem's for your Breadcrumb
   */
  children: PropTypes.node
};
