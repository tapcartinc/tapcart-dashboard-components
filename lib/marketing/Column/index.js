import styled from "styled-components";
import media from "../../utils/_media";

const Column = styled.section`
  box-sizing: border-box;
  min-height: 1px;
  position: relative;
  flex: 0 0 ${props => 100 / props.cols}%;
  max-width: ${props => 100 / props.cols}%;
  right: auto;
  left: auto;
  flex-wrap: wrap;

  ${media.md`
  flex: 0 0 ${props => 100 / props.mobileCols}%;
  max-width: ${props => 100 / props.mobileCols}%;
  margin: 0 auto;
  `}
`;

export { Column };
