import styled from "styled-components";
import { sofiaPro } from "../../utils/_dashVariables";
import { swatches } from "../../utils/_swatches";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${swatches.grayBlue};
  position: relative;
  width: 100%;
  ${sofiaPro.medium}

  input {
    font-weight: 400;
    font-size: 15px;
    ${(props) => props.fontSize && `font-size: ${props.fontSize}px`};
    border-radius: 3px;
    border: none;
    background: transparent;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 5px;
    padding-right: 5px;
    letter-spacing: 0.25px;
    color: ${swatches.black};
    &:hover {
      cursor: auto;
    }
    &::placeholder {
      color: ${swatches.grayBlue};
    }
    &:focus {
      outline: none;
    }

    margin-left: 10px;
    ${(props) => (props.style ? props.style : null)}
  }
  ${(props) => (props.style ? props.style : null)}
`;

const StyledForm = styled.form`
  width: 420px;
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => (props.center ? `margin: 0 auto;` : "margin: 0px;")}

  ${(props) => (props.style ? props.style : null)}
`;

export { SearchContainer, StyledForm };
