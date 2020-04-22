import React from "react";
import { colorPicker } from "../../utils/_dashVariables";
import { Icon } from "../../elements/Icon";
import PropTypes from "prop-types";
import { MoonIcon } from "./icons/moon";
import { SunIcon } from "./icons/sun";
import {
  StyledToggleLabel,
  StyledToggleWrapper,
  StyledToggleInput,
} from "./styles";

function Toggle(props) {
  switch (props.type) {
    case "timeOfDay":
      return (
        <StyledToggleWrapper
          border={colorPicker.blue}
          backgroundOn={colorPicker.yellow}
          backgroundOff={colorPicker.blue}
          {...props}
        >
          <StyledToggleInput
            type="checkbox"
            id={props.name}
            checked={props.toggleState}
            onClick={() => props.onChange(!props.toggleState)}
            onChange={props.onChange}
            border={colorPicker.blue}
            backgroundOn={colorPicker.yellow}
            backgroundOff={colorPicker.blue}
            autoComplete="new-password"
            {...props}
          />

          <StyledToggleLabel
            border={colorPicker.blue}
            backgroundOn={colorPicker.yellow}
            backgroundOff={colorPicker.blue}
            htmlFor={props.name}
            onClick={() => props.onChange(!props.toggleState)}
            {...props}
          >
            <SunIcon
              type="checkmark-small"
              onClick={() => props.onChange(!props.toggleState)}
              fill={props.toggleState ? "transparent" : "white"}
            />
            <MoonIcon
              onClick={() => props.onChange(!props.toggleState)}
              fill={props.toggleState ? "transparent" : colorPicker.gray}
            />
          </StyledToggleLabel>
        </StyledToggleWrapper>
      );
    case "platforms":
      return (
        <StyledToggleWrapper
          border={colorPicker.androidGreen}
          backgroundOn={colorPicker.black}
          backgroundOff={colorPicker.androidGreen}
        >
          <StyledToggleInput
            type="checkbox"
            id={props.name}
            checked={props.toggleState}
            onClick={() => props.onChange(!props.toggleState)}
            onChange={props.onChange}
            border={colorPicker.androidGreen}
            backgroundOn={colorPicker.black}
            backgroundOff={colorPicker.androidGreen}
            autoComplete="new-password"
            {...props}
          />

          <StyledToggleLabel
            border={colorPicker.androidGreen}
            backgroundOn={colorPicker.black}
            backgroundOff={colorPicker.androidGreen}
            htmlFor={props.name}
            {...props}
          >
            <Icon
              type="apple"
              onClick={() => props.onChange(!props.toggleState)}
              fill={props.toggleState ? "white" : "white"}
              style={{
                position: "absolute",
                zIndex: 1,
                left: 6,
                marginTop: 6,
                marginLeft: 2,
                width: 18,
                height: 18,
              }}
            />
            <Icon
              type="android"
              onClick={() => props.onChange(!props.toggleState)}
              fill={!props.toggleState ? "white" : "white"}
              style={{
                position: "absolute",
                zIndex: 1,
                right: 5,
                marginTop: 6,
                width: 20,
                height: 20,
              }}
            />
          </StyledToggleLabel>
        </StyledToggleWrapper>
      );
    case "basic":
    default:
      return (
        <StyledToggleWrapper
          border={colorPicker.grayBlue}
          backgroundOn={colorPicker.green100}
          backgroundOff={colorPicker.offWhite}
          {...props}
        >
          <StyledToggleInput
            type="checkbox"
            id={props.name}
            checked={props.toggleState}
            onClick={() => props.onChange(!props.toggleState)}
            onChange={props.onChange}
            border={colorPicker.grayBlue}
            backgroundOn={colorPicker.green100}
            backgroundOff={colorPicker.offWhite}
            autoComplete="new-password"
            {...props}
          />

          <StyledToggleLabel
            border={colorPicker.grayBlue}
            backgroundOn={colorPicker.green100}
            backgroundOff={colorPicker.offWhite}
            htmlFor={props.name}
            {...props}
          >
            <Icon
              type="checkmark-small"
              onClick={() => props.onChange(!props.toggleState)}
              fill={props.toggleState ? "white" : "transparent"}
              style={{
                position: "absolute",
                zIndex: 1,
                left: 10,
                marginTop: 12,
              }}
            />
            <Icon
              type="small-close"
              onClick={() => props.onChange(!props.toggleState)}
              fill={props.toggleState ? "transparent" : colorPicker.gray}
              style={{
                position: "absolute",
                zIndex: 1,
                right: 11,
                marginTop: 12,
              }}
            />
          </StyledToggleLabel>
        </StyledToggleWrapper>
      );
  }
}
export { Toggle };

Toggle.propTypes = {
  /**
   * options: "basic" | "timeOfDay" | "platforms"
   */
  type: PropTypes.string,
  id: PropTypes.string,
  /**
   * Contains boolean value for toggle being switched on or off
   */
  toggleState: PropTypes.bool.isRequired,
  /**
   * Pass the function that sets the state for the toggle switch for the current toggle here
   */
  onChange: PropTypes.func,
};
Toggle.defaultProps = {
  type: "basic",
};
