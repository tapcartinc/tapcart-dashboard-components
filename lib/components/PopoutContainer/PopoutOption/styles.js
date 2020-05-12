import styled from "styled-components";
import { colorPicker, sofiaPro } from "../../../utils/_dashVariables";

const StyledPopoutOptionWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 14px 12px 14px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colorPicker.lightGray};
  font-size: 14px;
  color: ${colorPicker.black};
  ${sofiaPro.medium}
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
  }
  ${(props) => props.lastIndex && `border-bottom: 0px`};

  .popout-option-children {
    margin-left: auto;
  }
`;

export { StyledPopoutOptionWrapper };
