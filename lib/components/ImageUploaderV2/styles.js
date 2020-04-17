import styled from "styled-components";
import { colorPicker, sofiaPro } from "../../utils/_dashVariables";
import { Body } from "../../elements/Typography";

const StyledImageInputWrapper = styled.div.attrs(props => ({
  className: props.className
}))`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 13px;
  padding-right: 5px;
  ${sofiaPro.regular}
`;

const StyledLabel = styled(Body)`
  margin-bottom: 7px;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${colorPicker.black};
`;

const StyledImageInputHolder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  ${props => props.borderRadius && `border-radius: ${props.borderRadius}`};
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

const StyledImageInput = styled.div`
  width: 320px;
  min-height: 170px;
  height: auto;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${colorPicker.grayBlue};
  ${props => props.hasValue && `border: 1px solid ${colorPicker.lightGray}`};
  transition: all 0.2s ease;
  ${props => props.borderRadius && `border-radius: ${props.borderRadius}`};
  ${props => props.width && `width: ${props.width}`};
  ${props => props.height && `height: ${props.height}`};
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 2px ${colorPicker.blue};
  }
`;
const StyledImage = styled.img`
  background: ${colorPicker.offWhite};
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledImagePlaceholder = styled.div`
  background: ${colorPicker.offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  line-height: 1.27;
  text-align: center;
  color: ${colorPicker.blue};
  cursor: pointer;
  height: 100%;
  width: 100%;
  min-height: 170px;

  p {
    padding: 5px;
  }

  &:focus {
    outline: none;
  }
`;

export {
  StyledImageInputWrapper,
  StyledLabel,
  StyledImageInputHolder,
  StyledImageInput,
  StyledImage,
  StyledImagePlaceholder
};
