import styled from "styled-components";

const StyledToggleLabel = styled.label`
  position: relative;
  width: 64px;
  height: 32px;
  cursor: pointer;
  height: 32px;

  box-shadow: 0 0 0 1px
    ${props => (props.toggleState ? props.backgroundOn : props.border)};
  border-radius: 3px;
  background: ${props =>
    props.toggleState ? props.backgroundOn : props.backgroundOff};
  transition: 0.2s;
  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "";
    display: block;
    width: 33px;
    height: 34px;
    border-radius: 3px;
    border: 1px solid
      ${props => (props.toggleState ? props.backgroundOn : props.border)};
    background: white;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.11);
    -webkit-transition: 0.2s;
    transition: 0.2s;
    position: absolute;
    &:hover {
      cursor: pointer;
    }

    ${props =>
      !props.toggleState
        ? `left: -1px; top: -1px;`
        : `right: -1px; top: -1px;`};
  }
`;

const StyledToggleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledToggleInput = styled.input`
  opacity: 0;
  z-index: 1;
  width: 64px;
  height: 32px;
  transition: 0.2s;
  position: absolute;
  &:hover {
    cursor: pointer;
  }

  &:checked {
    transition: 0.2s;
    &::after {
      content: "";
      display: block;
      width: 32px;
      height: 32px;
      margin-left: 34px;
      left: 0px;
      transition: 0.2s;
    }
  }
`;

export { StyledToggleLabel, StyledToggleWrapper, StyledToggleInput };
