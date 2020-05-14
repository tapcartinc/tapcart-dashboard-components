import React, { useState } from "react";
import PropTypes from "prop-types";
import { swatches } from "../../utils/_swatches";
import { StyledLabel, StyledCharCount, StyledTextareaWrapper } from "./styles";

const Textarea = ({ innerRef, ...props }) => {
  const {
    errors,
    label,
    value,
    fontSize,
    name,
    placeholder,
    maxLength,
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
    bounceStyle["color"] = swatches.red;
    bounceStyle["position"] = "relative";

    bounceStyle["transition"] = "top 0.1s ease 0s";
  }

  return (
    <StyledTextareaWrapper
      errors={errors}
      fontSize={fontSize}
      {...props}
      hasInput={value && value.length >= 1}
    >
      {label && (
        <StyledLabel errors={errors}>{errors ? errors[0] : label}</StyledLabel>
      )}
      <div style={{ position: "relative" }}>
        <textarea
          className="input-style"
          ref={innerRef}
          value={value}
          name={name}
          onKeyPress={bounceFunc}
          onKeyUp={unbounceFunc}
          onChange={props.onChange}
          placeholder={placeholder}
          errors={errors ? errors.length >= 0 : undefined}
          {...props}
        />
        {maxLength && (
          <StyledCharCount
            hasInput={value && value.length >= 1}
            charCountHit={props.value.length === props.maxLength}
            bounce={bounce}
          >
            <span style={bounceStyle}>
              {props.value ? props.value.length : 0}
            </span>
            /{props.maxLength}
          </StyledCharCount>
        )}
      </div>
    </StyledTextareaWrapper>
  );
};

export { Textarea };

Textarea.propTypes = {
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
   * an good reference example for the label prop is the "error" story
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * custom font size in pixels
   */
  fontSize: PropTypes.number,
  /**
   * custom height of textarea in pixels
   */
  height: PropTypes.number,
  /**
   * Errors that can be passed into the component for error message handling and error styling
   */
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  /**
   * Maximum character amount a user can use in the input
   */
  maxLength: PropTypes.number,
};

Textarea.defaultProps = {
  height: 125,
};
