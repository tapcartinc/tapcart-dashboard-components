import styled from "styled-components";
import { swatches } from "../../utils/_swatches";
import { Label } from "../../elements/Label";

const StyledTextareaWrapper = styled.div`
  position: relative;
  width: 100%;
  ${(props) => props.width && `width: ${props.width}`};

  .input-style {
    border-radius: 3px;
    ${(props) =>
      props.errors
        ? `border: 1px solid ${swatches.red}`
        : `border: 1px solid ${swatches.grayBlue}`};
    background: ${(props) => (props.hasInput ? "#ffffff" : swatches.offWhite)};
    padding: 8px 17px;
    line-height: 18px;
    letter-spacing: 0.25px;
    color: #000000;
    width: 100%;
    font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
      sans-serif;
    font-weight: 400;
    &::placeholder {
      font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
        sans-serif;
      font-weight: 400;
      color: ${swatches.gray};
    }
    &:focus {
      outline: none;
    }
    font-size: 14px;
    ${(props) => props.fontSize && `font-size: ${fontSize}px`};
    font-weight: 400;
    transition: border 200ms ease;
    min-height: 125px;
    overflow-y: scroll;
    resize: none;
    ${(props) => props.height && `height: ${props.height}px`};
  }
  ${(props) => (props.style ? props.style : null)};
`;

const StyledCharCount = styled.div`
  position: absolute;
  text-align: right;
  right: 6px;
  bottom: 8px;
  color: ${(props) => (props.hasInput ? swatches.blue : swatches.gray)};
  ${(props) => props.charCountHit && `color: ${swatches.red};`}
  font-size: 14px;
  transition: top 0.5s ease 0s;
`;

const StyledLabel = styled(Label)`
  margin-bottom: 7px;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${(props) => (props.errors ? swatches.red : `#000000`)};
`;

export { StyledLabel, StyledCharCount, StyledTextareaWrapper };
