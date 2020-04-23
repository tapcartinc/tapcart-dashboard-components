import React from "react";
import { IconV2 } from "./index";
import styled from "styled-components";
import { sofiaPro } from "../../utils/_dashVariables";

const GalleryContainer = ({ input }) => {
  return (
    <StyledGallery>
      <IconWrapper input={input}>
        <IconV2 type="account" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="add" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="alert" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="analytics-stats" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="android-dev" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="apple-dev" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="arrow-down" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="arrow-left" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="arrow-right" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="arrow-up" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="attach" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="bag" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="calendar" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="carousel" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="cart" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="checkmark" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="collection" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="close" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="dismiss" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="discount" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="dot-dot-dot" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="download-cloud" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="drag-and-drop" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="edit" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="edit-content" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="full-arrow-right" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="go-live" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="google-play" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="search" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="small-close" iconLeft />
      </IconWrapper>
      <IconWrapper input={input}>
        <IconV2 type="trash" iconLeft />
      </IconWrapper>
    </StyledGallery>
  );
};
export default GalleryContainer;

const IconWrapper = ({ children, input }) => {
  return (
    <StyledIconWrapper showIcon={!input || children.props.type.includes(input)}>
      {children}
      <span>{children.props.type}</span>
    </StyledIconWrapper>
  );
};

const StyledGallery = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 1em;
  margin: 1em auto;

  &:after {
    content: "";
    flex: auto;
  }
`;

const StyledIconWrapper = styled.div`
  width: 25%;
  height: 70px;
  align-items: center;
  display: ${(props) => (props.showIcon ? "flex" : "none")};

  span {
    font-weight: 200;
    font-size: 14px;
  }
`;
