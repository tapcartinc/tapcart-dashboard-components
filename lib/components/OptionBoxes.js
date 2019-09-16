import React from "react";
import styled from "styled-components";
import { Icon } from "../elements/Icon";
import { colors } from "../utils/_variables";
import { hoverWithBorder } from "../utils/_animations";

function OptionBoxes(props) {
  const { options, clickOption, selectedOption } = props;
  return (
    <OptionBoxesWrapper {...props}>
      {options.map(option => {
        return (
          <Option
            {...props}
            selectedOption={selectedOption}
            currentOption={option.label}
            key={option.label}
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
  // overflow: hidden;
  font-family: "Circular-Book"
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
    props.selectedOption.label === props.currentOption
      ? colors.highlightblue
      : "transparent"};
  justify-items: center;
  align-items: center;
  justify-content: center;
  color: ${colors.black};

  &:hover {
    ${hoverWithBorder};
    cursor: pointer;
  }
`;
