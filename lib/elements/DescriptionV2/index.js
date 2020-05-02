import styled from "styled-components";
import { swatches } from "../SwatchesV2/index";
import { circularStd } from "../../utils/_dashVariables";

const DescriptionV2 = styled.p.attrs({
  className: "p",
})`
  color: ${swatches.gray};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "13px")};
  line-height: 18px;
  ${circularStd.book}
  -webkit-font-smoothing: antialiased;
  letter-spacing: normal;
`;

export { DescriptionV2 };
