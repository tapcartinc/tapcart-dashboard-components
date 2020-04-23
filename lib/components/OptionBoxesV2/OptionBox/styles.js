import styled from "styled-components";
import { colorPicker } from "../../../utils/_dashVariables";

const StyledOption = styled.li.attrs((props) => ({
  className: props.className,
}))`
  height: 100px;
  max-width: 120px;
  width: ${(props) => (props.size ? props.size : "33.333%")};
  margin-right: -1px;
  border: 1px solid ${colorPicker.border2};
  display: flex;
  flex-direction: column;
  background: white;
  ${(props) => props.selectedOption && `background: ${colorPicker.lightBlue}`};
  ${(props) =>
    props.included &&
    props.included.length &&
    props.included[0].value === props.currentOption &&
    `background: ${colorPicker.lightBlue}`};
  justify-items: center;
  align-items: center;
  justify-content: center;
  color: ${colorPicker.black};

  ${(props) => props.first && `border-radius: 3px 0px 0px 3px`};
  ${(props) => props.last && `border-radius: 0px 3px 3px 0px`};

  &:hover {
    cursor: pointer;
  }
`;
export { StyledOption };
