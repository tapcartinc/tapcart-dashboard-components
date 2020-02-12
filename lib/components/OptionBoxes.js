import React from "react";
import styled from "styled-components";
import { Icon } from "../elements/Icon";
import { colors } from "../utils/_variables";
import { hoverWithBorder } from "../utils/_animations";
import { sofiaPro, colorPicker } from "../utils/_dashVariables";

function OptionBoxes(props) {
  const { options, clickOption, selectedOption } = props;
  return (
    <OptionBoxesWrapper {...props}>
      {options.map(option => {
        return (
          <Option
            {...props}
            selectedOption={selectedOption}
            currentOption={option.value}
            key={option.value}
            onClick={() => clickOption(option)}
            optionCount={options.length}
          >
            <Icon type={option.icon} style={{ marginBottom: 10 }} />
            {option.label}
          </Option>
        );
      })}
    </OptionBoxesWrapper>
  );
}
export { OptionBoxes };

const OptionBoxesWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  ${sofiaPro.regular}
  font-size: 15px;
  text-transform: capitalize;
  border-radius: 4px;
  ${props => (props.style ? props.style : null)};
`;

const Option = styled.li`
  height: 100px;
  width: ${props => (props.size ? props.size : "33.333%")};
  font-size: 15px;
  box-shadow: 0px 0px 0px 1px ${colors.gray25};
  display: flex;
  flex-direction: column;
  background: ${props =>
    props.selectedOption && props.selectedOption.value === props.currentOption
      ? colorPicker.lightBlue
      : "transparent"};
  justify-items: center;
  align-items: center;
  justify-content: center;
  color: ${colors.black};

  &:hover {
    cursor: pointer;
  }
`;
