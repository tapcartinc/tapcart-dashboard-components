import React from "react";
import PropTypes from "prop-types";
import { StyledBreadcrumbWrapper, StyledBreadcrumbList } from "./styles";

const BreadcrumbsV2 = ({ children, className, style, ...rest }) => {
  return (
    <StyledBreadcrumbWrapper className={className} {...rest} style={style}>
      <StyledBreadcrumbList>{children}</StyledBreadcrumbList>
    </StyledBreadcrumbWrapper>
  );
};
export default BreadcrumbsV2;

BreadcrumbsV2.propTypes = {
  /**
   * Classname that can be added for css to the entire Breadcrumb wrapper
   */
  children: PropTypes.node,
  /**
   * Pass in the BreadcrumbItem's for your Breadcrumb
   */
  children: PropTypes.node
};
