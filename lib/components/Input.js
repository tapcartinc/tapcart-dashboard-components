import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, sofia } from '../utils/_variables';

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
  font-size: 18px;
  font-weight: 400;
  transition: border 200ms ease;

  ${props => (props.style ? props.style : null)};
`;

const Input = ({ value, name, placeholder, ...props }) => {
  return (
    <>
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
  onChange: PropTypes.func
};

Input.defaultProps = {
  error: false,
  name: ''
};
