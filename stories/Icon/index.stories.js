import React, { useState } from "react";
import { Icon } from "../../lib/elements/Icon";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import styled from "styled-components";
import { sofia } from "../../lib/utils/_variables";
import { colorPicker } from "../../lib";

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
  width: 65px;
  margin: 25px;
  text-align: center;
  line-height: 14px;
  font-size: 12px;
  ${props =>
    props.whiteIcon &&
    `background: ${colorPicker.blue}; border-radius: 3px; color: white; padding: 10px;`}

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
      <StyledIcon>
        <Icon type="current-draft" />
        current-draft
      </StyledIcon>
      <StyledIcon>
        <Icon type="blank-draft" />
        blank-draft
      </StyledIcon>
      <StyledIcon>
        <Icon type="duplicate" />
        duplicate
      </StyledIcon>
      <StyledIcon>
        <Icon type="go-live" />
        go-live
      </StyledIcon>
      <StyledIcon>
        <Icon type="megaphone" />
        megaphone
      </StyledIcon>
      <StyledIcon>
        <Icon type="image-fit" />
        image-fit
      </StyledIcon>
      <StyledIcon>
        <Icon type="clock" />
        clock
      </StyledIcon>
      <StyledIcon>
        <Icon type="blocks" />
        blocks
      </StyledIcon>
      <StyledIcon>
        <Icon type="theme" />
        theme
      </StyledIcon>
      <StyledIcon>
        <Icon type="menu-icon" />
        menu-icon
      </StyledIcon>
      <StyledIcon>
        <Icon type="checkmark-small" />
        checkmark-small
      </StyledIcon>
      <StyledIcon>
        <Icon type="add-section" />
        add-section
      </StyledIcon>
      <StyledIcon>
        <Icon type="double-dot-dot-dot" />
        double-dot-dot-dot
      </StyledIcon>
      <StyledIcon>
        <Icon type="stats" />
        stats
      </StyledIcon>
      <StyledIcon>
        <Icon type="dropdown-arrow" />
        dropdown-arrow
      </StyledIcon>
      <StyledIcon whiteIcon>
        <Icon type="preview-app-multicolored" />
        preview-app-multicolored
      </StyledIcon>
      <StyledIcon>
        <Icon type="duplicate" />
        duplicate
      </StyledIcon>
      <StyledIcon>
        <Icon type="blank-draft" />
        blank-draft
      </StyledIcon>
      <StyledIcon>
        <Icon type="current-draft" />
        current-draft
      </StyledIcon>
      <StyledIcon>
        <Icon type="upload-image" />
        upload-image
      </StyledIcon>
      <StyledIcon>
        <Icon type="collections-icon" />
        collections-icon
      </StyledIcon>
      <StyledIcon whiteIcon>
        <Icon type="toast-checkmark" />
        toast-checkmark
      </StyledIcon>
      <StyledIcon whiteIcon>
        <Icon type="toast-alert" />
        toast-alert
      </StyledIcon>
      <StyledIcon>
        <Icon type="small-drag" />
        small-drag
      </StyledIcon>
      <StyledIcon>
        <Icon type="video" />
        video
      </StyledIcon>
      <StyledIcon>
        <Icon type="text-icon" />
        text-icon
      </StyledIcon>
      <StyledIcon>
        <Icon type="users" />
        users
      </StyledIcon>
      <StyledIcon>
        <Icon type="app-settings" />
        app-settings
      </StyledIcon>
      <StyledIcon>
        <Icon type="customizations" />
        customizations
      </StyledIcon>
      <StyledIcon>
        <Icon type="listing" />
        listing
      </StyledIcon>
      <StyledIcon>
        <Icon type="account-settings" />
        account-settings
      </StyledIcon>
      <StyledIcon>
        <Icon type="upload-cloud" />
        upload-cloud
      </StyledIcon>
      <StyledIcon>
        <Icon type="google" />
        google
      </StyledIcon>
      <StyledIcon>
        <Icon type="chat-multicolored" />
        chat-multicolored
      </StyledIcon>
      <StyledIcon>
        <Icon type="phone-with-border" />
        phone-with-border
      </StyledIcon>
      <StyledIcon>
        <Icon type="automation" />
        automation
      </StyledIcon>
      <StyledIcon>
        <Icon type="integrations-header" />
        integrations-header
      </StyledIcon>
      <StyledIcon>
        <Icon type="engage" />
        engage
      </StyledIcon>
      <StyledIcon>
        <Icon type="push" />
        push
      </StyledIcon>
      <StyledIcon>
        <Icon type="copy" />
        copy
      </StyledIcon>
    </StyledIcons>
  );
};
