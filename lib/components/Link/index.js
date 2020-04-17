import PropTypes from "prop-types";
import React from "react";

const Link = ({ children, className, href, disabled, inline, ...other }) => {
  const Tag = disabled ? "p" : "a";

  return (
    <Tag href={disabled ? null : href} className={className} {...other}>
      {children}
    </Tag>
  );
};

Link.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes.string,

  /**
   * Provide the `href` attribute for the <a> node
   */
  href: PropTypes.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: PropTypes.bool
};

export default Link;
