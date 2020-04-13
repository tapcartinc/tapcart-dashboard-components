import styled from "styled-components";
import { circularStd, colorPicker } from "../../utils/_dashVariables";

// ${props =>
//   props.isOpen
//     ? `
//     border: 2px solid blue;
//     max-height: 100rem;
//     transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
//     transition-duration: 0.5s;
//     transition-property: max-height;
// `
//     : `max-height: 0;
//     overflow: hidden;
//     text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
//     transition-duration: 0.5s;
//     transition-property: max-height;
//     z-index: 1;
//     position: relative;
// `}
const StyledPanelWrapper = styled.div`
  padding: 0px 30px 0px 15px;
  border-radius: 3px;
  background: white;
  margin-bottom: 20px;
  border: 2px solid pink;

  ${props => (props.style ? props.style : null)}
`;

const StyledPanelChildrenWrapper = styled.div`
  padding-bottom: 25px;

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
  background: red;
`;

const StyledPanelChildren = styled.div`
  padding-bottom: 25px;

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
  background: red;
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

export {
  StyledPanelWrapper,
  StyledPanelChildrenWrapper,
  StyledPanelChildren,
  StyledPanelLabel
};

//   ${props =>
//     props.isOpen
//       ? `
//       max-height: 100rem;
//       transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
//       transition-duration: 0.5s;
//       transition-property: max-height;
// `
//       : `max-height: 0;
//       overflow: hidden;
//       text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
//       transition-duration: 0.5s;
//       transition-property: max-height;
//       z-index: 1;
//       position: relative;
//   `}
