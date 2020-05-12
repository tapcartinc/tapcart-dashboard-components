import styled from "styled-components";

const StyledPanelChildrenWrapper = styled.div.attrs(props => ({
  className: props.className
}))`
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

export { StyledPanelChildrenWrapper };
