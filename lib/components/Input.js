import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../utils/_variables";
import { circularStd, sofiaPro } from "../utils/_dashVariables";

const InputStyle = styled.input`
  border-radius: 3px;
  ${props =>
    props.errors
      ? `border: 1px solid ${colors.red}`
      : `border: 1px solid ${colors.blue50}`};

  background: ${colors.offwhite};
  padding: 10px 20px;
  letter-spacing: 0.25px;
  color: #000000;
  width: 100%;
  ${sofiaPro.regular};

  &::placeholder {
    ${sofiaPro.regular};
    color: ${colors.blue25};
  }
  &:focus {
    outline: none;
  }
  font-size: 14px;
  font-weight: 400;
  transition: border 200ms ease;

  ${props => (props.style ? props.style : null)};
`;

const Input = ({ errors, label, value, name, placeholder, ...props }) => {
  return (
    <>
      {label && (
        <StyledLabel errors={errors && errors.length >= 0}>
          {errors && errors.length >= 0 ? errors[0] : label}
        </StyledLabel>
      )}
      <InputStyle
        value={value}
        name={name}
        onChange={props.onChange}
        placeholder={placeholder}
        errors={errors && errors.length >= 0}
        {...props}
      />
    </>
  );
};

export { Input };

Input.propTypes = {
  error: PropTypes.bool,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string
};

Input.defaultProps = {
  error: false,
  name: ""
};

const StyledLabel = styled.p`
  margin-bottom: 7px;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: normal;
  ${circularStd.medium};
  color: ${props => (props.errors ? colors.red : `#000000`)};
`;
