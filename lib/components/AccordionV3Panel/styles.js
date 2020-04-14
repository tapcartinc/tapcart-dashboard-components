import styled from "styled-components";
import { circularStd, colorPicker } from "../../utils/_dashVariables";

const StyledPanelWrapper = styled.div`
  padding: 0px 30px 0px 15px;
  border-radius: 3px;
  background: white;
  ${props =>
    props.spacing ? `margin-bottom: ${props.spacing}px` : `margin-bottom: 8px`};
  ${props =>
    props.includeBorder && props.isOpen
      ? `border: 2px solid ${colorPicker.blue}`
      : `border: 2px solid ${colorPicker.textEmpty}`};
  ${props =>
    props.includeBorder &&
    props.error &&
    `border: 2px solid ${colorPicker.red}`};
  ${props => (props.style ? props.style : null)};
`;

const StyledPanelLabel = styled.div`
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  min-height: 35px;
  ${props => props.panelHeight && `height: ${props.panelHeight}px`};
  ${props => (props.style ? props.style : null)};
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

const StyledPanelInnerChildren = styled.div`
padding-bottom: 25px;
// ${props => props.steps && `padding-left: 40px;`}
${props =>
  props.isOpen
    ? `
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    transition-property: opacity, transform;

`
    : `opacity: 0;
    transform: translateY(-1rem);
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  transition-property: opacity, transform;

`}
`;

const StyledStep = styled.div`
  transition: 0.2s all ease-in-out;
  background: ${props =>
    props.stepComplete ? colorPicker.green100 : colorPicker.blue};
  height: 26px;
  width: 26px;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  ${props => props.error && `background: ${colorPicker.red};`}
`;

const StyledLabelChildren = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  StyledPanelWrapper,
  StyledPanelLabel,
  StyledPanelChildrenWrapper,
  StyledPanelInnerChildren,
  StyledStep,
  StyledLabelChildren
};
