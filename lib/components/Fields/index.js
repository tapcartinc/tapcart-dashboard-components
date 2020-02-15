import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { circularStd, sofiaPro, colorPicker } from "../../utils/_dashVariables";

const Fields = props => {
  const { sectionHeader, children } = props;
  return (
    <StyledFieldsWrapper>
      {sectionHeader && <SectionHeader>{sectionHeader}</SectionHeader>}
      <StyledFields>{children}</StyledFields>
    </StyledFieldsWrapper>
  );
};
export { Fields };

const StyledFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  margin: 0 auto;
  margin-bottom: 10px;
  align-items: flex-start;
`;

const StyledFields = styled.div`
  border-radius: 3px;
  width: 100%;
  border: 1px solid ${colorPicker.gray25};
  overflow: hidden;
`;

const SectionHeader = styled.h3`
  font-size: 18px;
  line-height: 22px;
  color: ${colorPicker.blue};
  ${circularStd.medium}
  margin-bottom: 8px;
  margin-top: 32px;
`;
