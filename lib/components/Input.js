import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, sofia } from "../utils/_variables";

const InputStyle = styled.input`
  border-radius: 3px;
  ${props =>
    props.error
      ? `border: 1px solid ${colors.red}`
      : `border: 1px solid ${colors.blue50}`};
  background: ${colors.offwhite};
  padding: 10px 20px;
  letter-spacing: 0.25px;
  width: 100%;
  ${sofia.sofiaRegular};

  &::placeholder {
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

const Input = ({ label, value, name, placeholder, ...props }) => {
  return (
    <>
      {label && <StyledLabel>{label}</StyledLabel>}
      <InputStyle
        value={value}
        name={name}
        onChange={props.onChange}
        placeholder={placeholder}
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
  font-family: "CircularStd-Book";
  src: url("/fonts/CircularStd-Book.woff") format("woff"),
    url("/fonts/CircularStd-Book.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: normal;
  color: #000000;
`;
