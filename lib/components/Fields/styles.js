import styled from "styled-components";
import { colorPicker, circularStd } from "../../utils/_dashVariables";

const StyledFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 10px;
  align-items: flex-start;
  ${props => props.maxWidth && `max-width: ${props.maxWidth}`};
  ${props => props.padding && `padding: ${props.padding}`};
  ${props => props.width && `width: ${props.width}`};

  ${props => (props.style ? props.style : null)};
`;

const StyledFields = styled.div`
  border-radius: 3px;
  width: 100%;
  border: 1px solid ${colorPicker.gray25};
`;

const SectionHeader = styled.h3`
  font-size: 18px;
  line-height: 22px;
  color: ${colorPicker.blue};
  ${circularStd.medium}
  margin-bottom: 8px;
  margin-top: 32px;
`;

export { StyledFieldsWrapper, StyledFields, SectionHeader };
