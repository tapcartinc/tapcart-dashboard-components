import React from "react";
import styled from "styled-components";
import { Header, Body } from "../../elements/Typography";

const PageHeader = props => {
  const { header, description, children, childrenStyles } = props;
  return (
    <StyledPageHeader {...props}>
      <StyledPageHeaderMain>
        <Header style={{ fontSize: 18, lineHeight: 1.28 }}>{header}</Header>
        <Body>{description}</Body>
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
  max-width: 1140px;
  padding-bottom 0px;
  padding-left: 45px;
  padding-right: 45px;
  margin: 0 auto;
  ${props => (props.style ? props.style : null)};
`;

const StyledPageHeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 540px;
`;

const StyledPageHeaderChildren = styled.div`
  ${props => (props.childrenStyles ? childrenStyles : null)}
`;
