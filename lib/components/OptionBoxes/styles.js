import styled from "styled-components";
import { sofiaPro } from "../../utils/_dashVariables";

const StyledOptionBoxesWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  font-size: 15px;
  text-transform: capitalize;
  border-radius: 4px;
  ${sofiaPro.regular}
  ${(props) => (props.style ? props.style : null)};
`;

export { StyledOptionBoxesWrapper };
