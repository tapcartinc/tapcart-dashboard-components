import PropTypes from "prop-types";
import React from "react";

const Link = React.forwardRef(function Link(props, ref) {
  const { element, ...rest } = props;
  return React.createElement(element, {
    style: { textDecoration: "none" },
    className: props.className,
    ...rest,
    ref,
  });
});

Link.propTypes = {
  /**
   * Element used to create the link. Defaults to `a`, can also accept
   * alternative tag names or custom components like `Link` from `react-router`.
   */
  element: PropTypes.elementType,
  /**
   * Classname to pass to link for styling
   */
  className: PropTypes.string,
};

Link.defaultProps = {
  element: "a",
};

export { Link };
