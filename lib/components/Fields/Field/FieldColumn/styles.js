import styled from "styled-components";

const StyledFieldColumn = styled.div.attrs(props => ({
  className: props.className
}))`
  width: 50%;

  .flex-end {
    justify-content: flex-end;
  }

  // ${props => props.index > 1 && `padding-top: 20px`};
  ${props => props.stretch && `width: 100%`};
  ${props => props.style}
`;

export { StyledFieldColumn };
