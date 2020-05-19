import React from "react";
import styled from "styled-components";
import { Header } from "../../elements/TypographyOld";
import { colorPicker } from "../../utils/_dashVariables";

const PageHeader = (props) => {
  const { header, description, children, childrenStyles } = props;
  return (
    <StyledPageHeader {...props}>
      <StyledPageHeaderMain>
        <Header style={{ fontSize: 18, lineHeight: 1.28 }}>{header}</Header>
        <StyledBody {...props}>{description}</StyledBody>
      </StyledPageHeaderMain>
      <StyledPageHeaderChildren childrenStyles={childrenStyles}>
        {children}
      </StyledPageHeaderChildren>
    </StyledPageHeader>
  );
};

export { PageHeader };

const StyledPageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding-bottom 0px;
  margin: 0 auto;
  ${(props) => (props.style ? props.style : null)};
`;

const StyledPageHeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 30px;
`;

const StyledPageHeaderChildren = styled.div`
  ${(props) => (props.childrenStyles ? childrenStyles : null)}
`;

const StyledBody = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${(props) => (props.color ? props.color : colorPicker.black)};
  ${(props) => props.align === "center" && `text-align: center`};
  ${(props) => props.align === "left" && `text-align: left`};
  ${(props) => (props.style ? props.style : null)}
`;
