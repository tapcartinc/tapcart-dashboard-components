import styled from "styled-components";
import { colorPicker, sofiaPro } from "../../../utils/_dashVariables";

const StyledDescription = styled.div`
  color: ${colorPicker.gray};
  font-size: 13px;
  line-height: 18px;
  ${sofiaPro.regular}
  ${(props) => props.errors && props.errors.length > 0 && `display: none`};
`;

export { StyledDescription };
