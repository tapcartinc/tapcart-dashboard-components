import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { circularStd, sofiaPro, colorPicker } from "../../utils/_dashVariables";

const Fields = props => {
  const { sectionHeader, width, children } = props;
  return (
    <StyledFieldsWrapper width={width} {...props}>
      {sectionHeader && <SectionHeader>{sectionHeader}</SectionHeader>}
      <StyledFields>{children}</StyledFields>
    </StyledFieldsWrapper>
  );
};
export { Fields };

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
