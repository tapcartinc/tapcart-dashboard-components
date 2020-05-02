import React, { useState } from "react";
import PropTypes from "prop-types";
import { swatches } from "../../elements/SwatchesV2/index";
import { LabelV2 } from "../../elements/LabelV2";
import { StyledInputWrapper, StyledCharCount } from "./styles";

const InputV2 = ({ innerRef, ...props }) => {
  const {
    errors,
    label,
    value,
    name,
    placeholder,
    maxLength,
    disabled,
    width,
    type,
  } = props;

  const [bounce, setBounce] = useState(false);

  const bounceFunc = () => {
    if (!maxLength) return;
    if (value.length === maxLength) {
      return setBounce(true);
    }
  };

  const unbounceFunc = () => {
    if (!maxLength) return;
    return setBounce(false);
  };

  const bounceStyle = {};
  if (bounce) {
    bounceStyle["top"] = "-3px";
    bounceStyle["color"] = swatches.red;
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
    >
      {label && (
        <LabelV2 errors={errors && errors.length >= 0}>
          {errors && errors.length >= 0 ? errors[0] : label}
        </LabelV2>
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

export { InputV2 };

InputV2.propTypes = {
  /**
   * state value for input
   */
  value: PropTypes.string.isRequired,
  /**
   * useful for multiple inputs using the same onChange handler (e.target.name: e.target.value)
   */
  name: PropTypes.string,
  /**
   * placeholder text if state value is empty
   */
  placeholder: PropTypes.string,
  /**
   * onChange handler
   */
  onChange: PropTypes.func,
  /**
   * label to be shown above input value; helpful to use this as a prop of the input value because the error handling is in one component
   */
  label: PropTypes.string,
  /**
   * ex: email, password, etc
   */
  type: PropTypes.string,
  /**
   * custom font size
   */
  fontSize: PropTypes.string,
};

InputV2.defaultProps = {};
