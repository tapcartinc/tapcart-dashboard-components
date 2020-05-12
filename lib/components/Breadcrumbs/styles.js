import styled from "styled-components";

const StyledBreadcrumbWrapper = styled.nav.attrs(props => ({
  className: props.className
}))`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 10px;
  ${props => (props.style ? props.style : null)};
`;

const StyledBreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export { StyledBreadcrumbWrapper, StyledBreadcrumbList };
