import styled from "styled-components";
import { colorPicker } from "../../utils/_dashVariables";

const StyledAccordionLabel = styled.div`
  cursor: pointer;
  // font-size: 14px;
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  text-transform: uppercase;
  color: ${props => (props.steps ? colorPicker.blue : colorPicker.black)};
`;

export { StyledAccordionLabel };
