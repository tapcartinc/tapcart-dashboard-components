import React from "react";
import {
  withKnobs,
  select,
  number,
  boolean,
  optionsKnob
} from "@storybook/addon-knobs";

import { Header } from "../../lib/elements/Typography";
import { ContainerBox } from "../../lib/layout/ContainerBox";
import { boxShadow } from "../../lib/utils/_variables";

export default {
  component: ContainerBox,
  title: "Layout/ContainerBox",
  parameters: {
    componentSubtitle: "ContainerBox subtitle placeholder"
  },

  decorators: [withKnobs]
};

const label = "BoxShadow";
const options = {
  Small: boxShadow.small,
  Medium: boxShadow.medium,
  Large: boxShadow.large
};
const defaultValue = boxShadow.medium;

export const containerBox = () => (
  <ContainerBox>
    <Header>Container box</Header>
  </ContainerBox>
);

export const containerBoxColumns = () => (
  <>
    <ContainerBox columns={3} boxShadow={select(label, options, defaultValue)}>
      <Header>Container one</Header>
    </ContainerBox>
    <ContainerBox columns={3} boxShadow={select(label, options, defaultValue)}>
      <Header>Container two</Header>
    </ContainerBox>
    <ContainerBox columns={3} boxShadow={select(label, options, defaultValue)}>
      <Header>Container three</Header>
    </ContainerBox>
  </>
);
