import styled from "styled-components";
import { colorPicker, sofiaPro } from "../../utils/_dashVariables";
import { Body } from "../../elements/Typography";

const StyledField = styled.div`
  background: white;
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 19px 24px;
  flex-wrap: wrap;

  ${props =>
    !props.lastField && `border-bottom: 1px solid ${colorPicker.gray25}`};
`;

const StyledChildren = styled.div`
  padding: 19px 24px;
  padding-left: 5px;

  ${props =>
    props.fieldFlow === "vertical" &&
    `width: 100%; padding: 0px 24px 19px 24px;`};
  ${props =>
    props.hasToggle && `padding-left: 19px; width: 100%; padding-top: 0px`};

  ${props => !props.hasToggle && `display: flex`};
  ${props => props.hasToggle && !props.toggleState && `display: none`};
  ${props => props.hasToggle && props.toggleState && `display: flex`};
  ${props => props.flexWrap && `flex-wrap: wrap`};
  ${props => props.justifyContent && `justify-content: space-between`};
`;
const StyledFieldInfo = styled.div`
  padding: 19px 24px;
  ${props => (props.style ? props.style : null)}
`;
const StyledLabel = styled(Body)`
  line-height: 20px;
  margin-top: 0px;
  margin-bottom: 3px;
`;

const StyledDescription = styled.div`
  color: ${colorPicker.gray};
  font-size: 13px;
  line-height: 18px;
  ${sofiaPro.regular}
  ${props => props.errors && props.errors.length > 0 && `display: none`};
`;
const StyledErrors = styled.div`
  color: ${colorPicker.red};
  font-size: 13px;
  line-height: 18px;
  ${sofiaPro.regular}

  span {
    display: block;
  }
`;

export {
  StyledField,
  StyledChildren,
  StyledFieldInfo,
  StyledLabel,
  StyledDescription,
  StyledErrors
};
