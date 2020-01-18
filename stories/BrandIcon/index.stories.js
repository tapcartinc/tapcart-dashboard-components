import React, { useState } from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import styled from "styled-components";
import { sofia } from "../../lib/utils/_variables";
import { BrandIcon } from "../../lib";

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
  component: BrandIcon,
  title: "Design Elements/BrandIcon",
  decorators: [withKnobs]
};

export const brandIcon = () => {
  return (
    <StyledIcons>
      <StyledIcon>
        <BrandIcon type="many-more" />
        many-more
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="brand-content" />
        brand-content
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="customer-accounts" />
        customer-accounts
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="abstract-design" />
        abstract-design
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="engagement-push" />
        engagement-push
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="abstract-integrations" />
        abstract-integrations
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="shoppable-instagram" />
        shoppable-instagram
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="3d-shopping" />
        3d-shopping
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="faster-checkout" />
        faster-checkout
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="convert-more-customers" />
        convert-more-customers
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="increase-order-value" />
        increase-order-value
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="reduce-abandoned-checkouts" />
        reduce-abandoned-checkouts
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="product-reviews" />
        product-reviews
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="optimized-search" />
        optimized-search
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="optimal-mobile-experience" />
        optimal-mobile-experience
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="healthy-snacks" />
        healthy-snacks
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="abstract-chat" />
        abstract-chat
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="healthcare" />
        healthcare
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="tahoe" />
        tahoe
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="unlimited-pto" />
        unlimited-pto
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="taco-tuesday" />
        taco-tuesday
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="equity" />
        equity
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="work-with-us" />
        work-with-us
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="home" />
        home
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="support-center" />
        support-center
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="pricing" />
        pricing
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="features" />
        features
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="team" />
        team
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="book-a-demo" />
        book-a-demo
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="engineering" />
        engineering
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="design" />
        design
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="customer success" />
        customer success
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="sales" />
        sales
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="operations" />
        operations
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="quote" />
        quote
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="chat" />
        chat
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="clock" />
        clock
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="cart" />
        cart
      </StyledIcon>

      <StyledIcon>
        <BrandIcon type="dragdrop" />
        dragdrop
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="customer-success" />
        customer-success
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="push" />
        push
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="providers" />
        providers
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="video" />
        video
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="video" />
        video
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="ebook" />
        ebook
      </StyledIcon>
      <StyledIcon>
        <BrandIcon type="infographic" />
        infographic
      </StyledIcon>
    </StyledIcons>
  );
};
