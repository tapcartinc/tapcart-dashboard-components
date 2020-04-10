import styled from "styled-components";
import { circularStd, colorPicker } from "../../utils/_dashVariables";

const StyledAccordionLabel = styled.div`
  cursor: pointer;
  font-size: 14px;
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  ${circularStd.book}
  height: 65px;
  text-transform: uppercase;
  color: ${props => (props.steps ? colorPicker.blue : colorPicker.black)};
  letter-spacing: 1px;
`;

export { StyledAccordionLabel };
