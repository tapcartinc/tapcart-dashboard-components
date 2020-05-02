import styled from "styled-components";
import { swatches } from "../../elements/SwatchesV2/index";
import { sofiaPro } from "../../utils/_dashVariables";

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
  ${(props) => props.width && `width: ${props.width}`};
  .input-style {
    border-radius: 3px;
    color: ${swatches.black};
    width: 100%;
    ${(props) =>
      props.errors
        ? `border: 1px solid ${swatches.red}`
        : `border: 1px solid ${swatches.grayBlue}`};
    background: ${(props) => (props.hasInput ? "#ffffff" : swatches.offWhite)};
    padding: 10px 14px;
    letter-spacing: 0.25px;
    ${sofiaPro.regular}
    &::placeholder {
      color: ${swatches.gray};
      ${sofiaPro.regular}
    }
    &:focus {
      outline: none;
    }
    font-size: 14px;
    font-weight: 400;
    transition: all 0.2s ease-in;

    ${(props) => props.disabled && `color: ${swatches.grayBlue}`};
    ${(props) => (props.style ? props.style : null)};
  }
`;

const StyledCharCount = styled.div`
  position: absolute;
  text-align: right;
  right: 10px;
  bottom: 13px;
  color: ${(props) => (props.hasInput ? swatches.blue : swatches.gray)};
  ${(props) => props.charCountHit && `color: ${swatches.red};`}
  font-size: 14px;
  transition: top 0.1s ease 0s;
  ${sofiaPro.regular}
`;

export { StyledInputWrapper, StyledCharCount };
