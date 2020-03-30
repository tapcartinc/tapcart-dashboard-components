import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../utils/_variables";
import { Body } from "../../elements/Typography";
import { colorPicker } from "../../utils/_dashVariables";

const Textarea = ({ innerRef, ...props }) => {
  const { errors, label, value, name, placeholder, maxLength } = props;

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
    bounceStyle["transition"] = "top 0.1s ease 0s";
  }

  return (
    <StyledTextareaWrapper
      errors={errors}
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
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string
};

Textarea.defaultProps = {
  name: ""
};

const StyledTextareaWrapper = styled.div`
  position: relative;
  width: 100%;

  .input-style {
    border-radius: 3px;
    ${props =>
      props.errors
        ? `border: 1px solid ${colorPicker.red}`
        : `border: 1px solid ${colorPicker.grayBlue}`};
    background: ${props => (props.hasInput ? "#ffffff" : colorPicker.offWhite)};
    padding: 8px 17px;
    line-height: 18px;
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
    transition: border 200ms ease;
    min-height: 125px;
    overflow-y: scroll;
    resize: none;
    ${props => props.height && `height: ${props.height}`};
  }
  ${props => (props.style ? props.style : null)};
`;

const StyledCharCount = styled.div`
  position: absolute;
  text-align: right;
  right: 6px;
  bottom: 8px;
  color: ${props => (props.hasInput ? colorPicker.blue : colorPicker.gray)};
  ${props => props.charCountHit && `color: ${colorPicker.red};`}
  font-size: 14px;
  transition: top 0.5s ease 0s;
`;

const StyledLabel = styled(Body)`
  margin-bottom: 7px;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${props => (props.errors ? colors.red : `#000000`)};
`;
