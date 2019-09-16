import React from "react";
import styled from "styled-components";
import { Icon } from "../elements/Icon";
import { colors } from "../utils/_variables";
import { placeholder, input } from "../elements/Typography";

function SearchBar({ value, name, placeholder, ...props }) {
  return (
    <form onSubmit={props.onChange} {...props}>
      <SearchContainer {...props}>
        <Icon
          type="search"
          style={{ position: "absolute", left: 0, top: 14 }}
        />
        <Input
          {...props}
          value={value}
          name={name}
          onChange={props.onChange}
          placeholder={placeholder}
        />
      </SearchContainer>
    </form>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${colors.gray25};
  max-width: 400px;
  position: relative;
  ${props => (props.style ? props.style : null)}
`;

const Input = styled.input`
  border-radius: 3px;
  border: none;
  background: transparent;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 5px;
  padding-right: 5px;
  letter-spacing: 1px;
  ${input},
  &:hover {
    cursor: auto;
  }
  &::placeholder {
    ${placeholder}
  }
  &:focus {
    outline: none;
  }
  font-weight: 400;
  margin-left: 10px;
  ${props => (props.style ? props.style : null)}
`;

export { SearchBar };
