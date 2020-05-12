import styled from "styled-components";
import { colorPicker } from "../../../utils/_dashVariables";

const StyledAccordionLabel = styled.div.attrs((props) => ({
  className: props.className,
}))`
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  text-transform: uppercase;
  color: ${(props) => (props.steps ? colorPicker.blue : colorPicker.black)};
`;

export { StyledAccordionLabel };
