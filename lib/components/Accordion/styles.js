import styled from "styled-components";

const StyledAccordionWrapper = styled.div.attrs(props => ({
  className: props.className
}))`
  ${props => (props.style ? props.style : null)}
`;

export { StyledAccordionWrapper };
