import React, { useContext } from "react";
import { Icon } from "../../../elements/Icon";
import { StyledPopoutOptionWrapper } from "./styles";
import { Sofia } from "../../../elements/TypographyOld";
import { colorPicker } from "../../../utils/_dashVariables";
import PropTypes, { node } from "prop-types";
import { PopoutContainerContext } from "..";

const PopoutOption = ({ icon, onClick, iconColor, label, children }) => {
  const { open, disabled } = useContext(PopoutContainerContext);

  return (
    <StyledPopoutOptionWrapper onClick={onClick}>
      <Icon
        type={icon}
        fill={iconColor ? iconColor : colorPicker.blue}
        iconRight
        iconLeft
      />
      <Sofia fontSize="14px" color={colorPicker.black}>
        {label}
      </Sofia>
      <span className="popout-option-children">{children}</span>
    </StyledPopoutOptionWrapper>
  );
};
export { PopoutOption };

PopoutOption.propTypes = {
  /**
   * Icon displayed to the left of the label
   */
  icon: PropTypes.string,
  /**
   * Color of icon
   */
  iconColor: PropTypes.string,
  /**
   * Label/text for the option
   */
  label: PropTypes.string.isRequired,
  /**
   * Useful for PopoutOptions that require components such as segmented control, range, etc.
   */
  children: PropTypes.node,
};

PopoutOption.defaultProps = {
  iconColor: colorPicker.blue,
};
