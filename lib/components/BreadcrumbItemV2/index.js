import React from "react";
import { StyledBreadcrumb } from "./styles";
import PropTypes, { node } from "prop-types";

const BreadcrumbItemV2 = ({ children, className, active, ...rest }) => {
  const href = children.props && children.props.href;

  return (
    <StyledBreadcrumb className={className} active={active} {...rest}>
      {React.cloneElement(children, {
        href,
        ...rest
      })}
    </StyledBreadcrumb>
  );
};

export default BreadcrumbItemV2;

BreadcrumbItemV2.propTypes = {
  /**
   * Controls whether more than one panel can be opened at a time in the accordion
   */
  active: PropTypes.bool,
  /**
   * Classname that can be added for css to the individual crumb item
   */
  className: PropTypes.string,
  children: PropTypes.node
};

BreadcrumbItemV2.defaultProps = {
  active: false
};
