import styled from "styled-components";
import { swatches } from "../SwatchesV2/index";
import { circularStd } from "../../utils/_dashVariables";

const LabelV2 = styled.p.attrs({
  className: "p",
})`
  color: ${(props) => (props.errors ? swatches.red : swatches.black)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  line-height: 1.5;
  margin-bottom: 7px;
  -webkit-font-smoothing: antialiased;
  letter-spacing: normal;
  ${circularStd.book}
`;

export { LabelV2 };
