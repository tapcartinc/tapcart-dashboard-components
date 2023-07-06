import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../utils/_variables";
import { Body } from "../elements/Typography";
import { ToolTip } from "./ToolTip";
import { colorPicker } from "../utils/_dashVariables";

const Input = ({ innerRef, ...props }) => {
  const {
    disabled,
    errors,
    label,
    maxLength,
    minHeight,
    name,
    placeholder,
    tooltip,
    type,
    value,
    width,
  } = props;

  const [bounce, setBounce] = useState(false);

  const bounceFunc = () => {
    if (value.length === maxLength) {
      return setBounce(true);
    }
  };

  const unbounceFunc = () => {
    return setBounce(false);
  };

  const bounceStyle = {};
  if (bounce) {
    bounceStyle["top"] = "-3px";
    bounceStyle["color"] = colorPicker.red;
    bounceStyle["position"] = "relative";
    bounceStyle["marginLeft"] = "-17px";
    bounceStyle["transition"] = "transform 1s ease 0s";
  }

  return (
    <StyledInputWrapper
      width={width}
      disabled={disabled}
      errors={errors}
      hasInput={value && value.length >= 1}
      minHeight={minHeight}
    >
      {label && (
        <StyledLabel errors={errors && errors.length >= 0}>
          {errors && errors.length >= 0 ? errors[0] : label}
          {tooltip && tooltip.length >= 0 && (
            <ToolTip wrapperStyle={{ margin: "0 8px auto" }}>{tooltip}</ToolTip>
          )}
        </StyledLabel>
      )}
      <input
        className="input-style"
        ref={innerRef}
        value={value}
        type={type}
        name={name}
        onKeyPress={bounceFunc}
        onKeyUp={unbounceFunc}
        onChange={props.onChange}
        placeholder={placeholder}
        disabled={disabled}
        errors={errors ? errors.length >= 0 : undefined}
        {...props}
      />
      {maxLength && (
        <StyledCharCount
          charCountHit={props.value.length === props.maxLength}
          bounce={bounce}
          hasInput={value && value.length >= 1}
          minHeight={minHeight}
        >
          <span style={bounceStyle}>
            {props.value ? props.value.length : 0}
          </span>
          /{props.maxLength}
        </StyledCharCount>
      )}
    </StyledInputWrapper>
  );
};

export { Input };

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  minHeight: PropTypes.string,
  tooltip: PropTypes.func,
};

Input.defaultProps = {
  name: "",
};

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
  ${(props) => props.width && `width: ${props.width}`};
  .input-style {
    border-radius: 3px;
    ${(props) =>
      props.errors
        ? `border: 1px solid ${colors.red}`
        : `border: 1px solid ${colorPicker.grayBlue}`};
    background: ${(props) =>
      props.hasInput ? "#ffffff" : colorPicker.offWhite};
    padding: 10px 20px;
    letter-spacing: 0.25px;
    color: #000000;
    width: 100%;
    font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
      sans-serif;
    font-weight: 400;
    &::placeholder {
      font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
        sans-serif;
      font-weight: 400;
      color: ${colorPicker.gray};
    }
    &:focus {
      outline: none;
    }
    font-size: 14px;
    font-weight: 400;
    transition: all 0.2s ease-in;
    ${(props) => props.minHeight && `min-height: ${props.minHeight}`};
    ${(props) => props.disabled && `color: ${colorPicker.grayBlue}`};
    ${(props) => (props.style ? props.style : null)};
  }
`;

const StyledCharCount = styled.div`
  position: absolute;
  text-align: right;
  font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif;
  right: 10px;
  bottom: ${(props) =>
    props.minHeight ? "calc((" + props.minHeight + "* .5) - 7px)" : "13px"};
  color: ${(props) => (props.hasInput ? colorPicker.blue : colorPicker.gray)};
  ${(props) => props.charCountHit && `color: ${colorPicker.red};`}
  font-size: 14px;
  transition: top 0.1s ease 0s;
`;

const StyledLabel = styled(Body)`
  margin-bottom: 7px;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  letter-spacing: normal;
  color: ${(props) => (props.errors ? colors.red : `#000000`)};
`;
