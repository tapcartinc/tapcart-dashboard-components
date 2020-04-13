import styled from "styled-components";
import { circularStd, colorPicker } from "../../utils/_dashVariables";

const StyledPanelWrapper = styled.div`
  padding: 0px 30px 0px 15px;
  border-radius: 3px;
  background: white;
  margin-bottom: 20px;
  border: 2px solid pink;
  ${props => console.log("props", props)}
  ${props => (props.style ? props.style : null)};
`;

const StyledPanelLabel = styled.div`
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

const StyledPanelChildrenWrapper = styled.div`
  ${props =>
    props.isOpen
      ? `
      max-height: 100rem;
      transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
      transition-duration: 0.5s;
      transition-property: max-height;
`
      : `max-height: 0;
      overflow: hidden;
      text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
      transition-duration: 0.5s;
      transition-property: max-height;
      z-index: 1;
      position: relative;
  `}
`;

export { StyledPanelWrapper, StyledPanelLabel, StyledPanelChildrenWrapper };
