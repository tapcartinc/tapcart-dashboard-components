import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledFieldsWrapper, StyledFields, SectionHeader } from "./styles";

const FieldsV2 = props => {
  const { sectionHeader, maxWidth, width, children } = props;

  return (
    <StyledFieldsWrapper width={width} maxWidth={maxWidth} {...props}>
      {sectionHeader && <SectionHeader>{sectionHeader}</SectionHeader>}
      <StyledFields>{children}</StyledFields>
    </StyledFieldsWrapper>
  );
};
export { FieldsV2 };

FieldsV2.propTypes = {
  /**
   * Header of entire parent field component containing inner fields
   */
  sectionHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Customizing width of current Fields section
   */
  width: PropTypes.string,
  /**
   * Customizing max-width of current Fields section
   */
  maxWidth: PropTypes.string,
  /**
   * Fields getting passed into the form section
   */
  children: PropTypes.node
};