import styled from "styled-components";

const StyledFieldHeader = styled.div`
  width: 50%;
  ${props => props.stretch && `width: 100%`};
`;

export { StyledFieldHeader };
