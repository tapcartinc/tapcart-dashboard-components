import React from "react";
import styled from "styled-components";
import { Icon } from "../elements/Icon";
import { colors } from "../utils/_variables";
import { placeholder, input } from "../elements/Typography";
import { colorPicker, sofiaPro } from "../utils/_dashVariables";

function SearchBar({ innerRef, center, value, name, placeholder, ...props }) {
  return (
    <StyledForm onSubmit={props.onChange} center={center} {...props}>
      <SearchContainer {...props}>
        <Icon
          type="search"
          style={{ position: "absolute", left: 0, top: 14 }}
        />
        <input
          {...props}
          onFocus={props.onFocus}
          ref={innerRef}
          name={name}
          onChange={props.onChange}
          placeholder={placeholder}
        />
      </SearchContainer>
    </StyledForm>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${colorPicker.grayBlue};
  position: relative;
  width: 100%;

  input {
    font-weight: 400;
    font-size: 15px;
    border-radius: 3px;
    border: none;
    background: transparent;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5px;
    padding-right: 5px;
    letter-spacing: 0.25px;
    color: ${colorPicker.black};
    &:hover {
      cursor: auto;
    }
    &::placeholder {
      color: ${colorPicker.grayBlue};
    }
    &:focus {
      outline: none;
    }

    ${sofiaPro.medium}

    margin-left: 10px;
    ${props => (props.style ? props.style : null)}
  }
  ${props => (props.style ? props.style : null)}
`;

const StyledForm = styled.form`
  width: 420px;
  ${props => props.width && `width: ${props.width}`};
  ${props => (props.center ? `margin: 0 auto;` : "margin: 0px;")}

  ${props => (props.style ? props.style : null)}
`;

export { SearchBar };
