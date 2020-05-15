import React from "react";
import PropTypes from "prop-types";

const ClickDropdownOption = (props) => {
  return <div className="">{props.children}</div>;
};
export { ClickDropdownOption };

ClickDropdownOption.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
