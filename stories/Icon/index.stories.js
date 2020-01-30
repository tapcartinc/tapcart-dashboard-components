import React, { useState } from "react";
import { Icon } from "../../lib/elements/Icon";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import styled from "styled-components";
import { sofia } from "../../lib/utils/_variables";

const StyledIcons = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${sofia.sofiaMedium};
`;
const StyledIcon = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  margin: 25px;
  text-align: center;
  line-height: 14px;
  font-size: 12px;

  svg {
    margin-bottom: 10px;
  }
`;

export default {
  component: Icon,
  title: "Design Elements/Icon",
  decorators: [withKnobs]
};

export const icon = () => {
  return (
    <StyledIcons>
      <StyledIcon>
        <Icon type="trash" />
        trash
      </StyledIcon>
      <StyledIcon>
        <Icon type="search" />
        search
      </StyledIcon>

      <StyledIcon>
        <Icon type="full-arrow-right" />
        full-arrow-right
      </StyledIcon>

      <StyledIcon>
        <Icon type="account" />
        account
      </StyledIcon>

      <StyledIcon>
        <Icon type="add" />
        add
      </StyledIcon>

      <StyledIcon>
        <Icon type="alert" />
        alert
      </StyledIcon>

      <StyledIcon>
        <Icon type="analytics-stats" />
        analytics-stats
      </StyledIcon>

      <StyledIcon>
        <Icon type="apple-dev" />
        apple-dev
      </StyledIcon>

      <StyledIcon>
        <Icon type="android-dev" />
        android-dev
      </StyledIcon>

      <StyledIcon>
        <Icon type="arrow-down" />
        arrow-down
      </StyledIcon>

      <StyledIcon>
        <Icon type="arrow-down" />
        arrow-down
      </StyledIcon>

      <StyledIcon>
        <Icon type="arrow-right" />
        arrow-right
      </StyledIcon>

      <StyledIcon>
        <Icon type="arrow-left" />
        arrow-left
      </StyledIcon>

      <StyledIcon>
        <Icon type="attach" />
        attach
      </StyledIcon>
      <StyledIcon>
        <Icon type="bag" />
        bag
      </StyledIcon>
      <StyledIcon>
        <Icon type="calendar" />
        calendar
      </StyledIcon>
      <StyledIcon>
        <Icon type="carousel" />
        carousel
      </StyledIcon>
      <StyledIcon>
        <Icon type="cart" />
        cart
      </StyledIcon>
      <StyledIcon>
        <Icon type="collection" />
        collection
      </StyledIcon>
      <StyledIcon>
        <Icon type="close" />
        close
      </StyledIcon>
      <StyledIcon>
        <Icon type="small-close" />
        small-close
      </StyledIcon>
      <StyledIcon>
        <Icon type="checkmark" />
        checkmark
      </StyledIcon>

      <StyledIcon>
        <Icon type="design" />
        design
      </StyledIcon>
      <StyledIcon>
        <Icon type="drops" />
        drops
      </StyledIcon>

      <StyledIcon>
        <Icon type="drag-and-drop" />
        rag-and-drop
      </StyledIcon>

      <StyledIcon>
        <Icon type="download-cloud" />
        download-cloud
      </StyledIcon>

      <StyledIcon>
        <Icon type="dot-dot-dot" />
        dot-dot-dot
      </StyledIcon>

      <StyledIcon>
        <Icon type="dismiss" />
        dismiss
      </StyledIcon>
      <StyledIcon>
        <Icon type="discount" />
        discount
      </StyledIcon>
      <StyledIcon>
        <Icon type="edit" />
        edit
      </StyledIcon>
      <StyledIcon>
        <Icon type="close" />
        close
      </StyledIcon>
      <StyledIcon>
        <Icon type="edit-content" />
        edit-content
      </StyledIcon>

      <StyledIcon>
        <Icon type="google-play" />
        google-play
      </StyledIcon>
      <StyledIcon>
        <Icon type="support" />
        support
      </StyledIcon>
      <StyledIcon>
        <Icon type="email" />
        email
      </StyledIcon>
      <StyledIcon>
        <Icon type="homepage" />
        homepage
      </StyledIcon>
      <StyledIcon>
        <Icon type="modal" />
        modal
      </StyledIcon>
      <StyledIcon>
        <Icon type="menu-two" />
        menu-two
      </StyledIcon>

      <StyledIcon>
        <Icon type="large-right-arrow" />
        large-right-arrow
      </StyledIcon>
      <StyledIcon>
        <Icon type="large-left-arrow" />
        large-left-arrow
      </StyledIcon>
      <StyledIcon>
        <Icon type="integrations" />
        integrations
      </StyledIcon>
      <StyledIcon>
        <Icon type="popup" />
        popup
      </StyledIcon>
      <StyledIcon>
        <Icon type="product" />
        product
      </StyledIcon>
      <StyledIcon>
        <Icon type="toast" />
        toast
      </StyledIcon>
      <StyledIcon>
        <Icon type="settings" />
        settings
      </StyledIcon>
      <StyledIcon>
        <Icon type="show-six-products" />
        show-six-products
      </StyledIcon>
      <StyledIcon>
        <Icon type="images" />
        images
      </StyledIcon>
      <StyledIcon>
        <Icon type="webpage" />
        webpage
      </StyledIcon>
      <StyledIcon>
        <Icon type="dismiss" />
        dismiss
      </StyledIcon>
      <StyledIcon>
        <Icon type="draft" />
        draft
      </StyledIcon>
      <StyledIcon>
        <Icon type="apple-developer" />
        apple-developer
      </StyledIcon>
      <StyledIcon>
        <Icon type="warning" />
        warning
      </StyledIcon>
      <StyledIcon>
        <Icon type="order" />
        order
      </StyledIcon>
      <StyledIcon>
        <Icon type="homepage" />
        homepage
      </StyledIcon>
      <StyledIcon>
        <Icon type="new-group" />
        new-group
      </StyledIcon>
      <StyledIcon>
        <Icon type="remove-image" />
        remove-image
      </StyledIcon>
      <StyledIcon>
        <Icon type="preview-app" />
        preview-app
      </StyledIcon>
      <StyledIcon>
        <Icon type="new-version" />
        new-version
      </StyledIcon>
      <StyledIcon>
        <Icon type="static" />
        static
      </StyledIcon>
      <StyledIcon>
        <Icon type="upgrade" />
        upgrade
      </StyledIcon>
      <StyledIcon>
        <Icon type="phone" />
        phone
      </StyledIcon>
      <StyledIcon>
        <Icon type="time" />
        time
      </StyledIcon>
      <StyledIcon>
        <Icon type="talkable-friends" />
        talkable-friends
      </StyledIcon>
      <StyledIcon>
        <Icon type="rewards" />
        rewards
      </StyledIcon>
      <StyledIcon>
        <Icon type="small-add" />
        small-add
      </StyledIcon>
      <StyledIcon>
        <Icon type="tip" />
        tip
      </StyledIcon>
      <StyledIcon>
        <Icon type="android" />
        android
      </StyledIcon>
      <StyledIcon>
        <Icon type="apple" />
        apple
      </StyledIcon>
      <StyledIcon>
        <Icon type="push" />
        push
      </StyledIcon>
      <StyledIcon>
        <Icon type="android-two" />
        android-two
      </StyledIcon>
      <StyledIcon>
        <Icon type="apple-two" />
        apple-two
      </StyledIcon>
      <StyledIcon>
        <Icon type="subtract" />
        subtract
      </StyledIcon>
      <StyledIcon>
        <Icon type="infographic" />
        infographic
      </StyledIcon>
      <StyledIcon>
        <Icon type="ebook" />
        ebook
      </StyledIcon>
      <StyledIcon>
        <Icon type="guide" />
        guide
      </StyledIcon>
      <StyledIcon>
        <Icon type="webinar" />
        webinar
      </StyledIcon>
      <StyledIcon>
        <Icon type="download" />
        download
      </StyledIcon>
    </StyledIcons>
  );
};
