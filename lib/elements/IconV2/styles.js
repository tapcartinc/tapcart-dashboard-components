import styled from "styled-components";
import { colorPicker } from "../../utils/_dashVariables";

const StyledSVG = styled.svg`
  ${(props) =>
    props.circleIcon &&
    `background: ${colorPicker.dullBlue};
  border-radius: 50%;
  padding: 5px;
  overflow: visible;
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  transform: scale(1.5);
  margin: 0 auto;
  height: 25px;
  width: 25px;`}
  ${(props) => props.fill && `color: ${props.fill} `};
  margin-left: ${(props) => (props.iconRight ? "10px" : "0px")};
  margin-right: ${(props) => (props.iconLeft ? "10px" : "0px")};
  ${(props) => (props.style ? props.style : null)};
`;

export { StyledSVG };
