import React from 'react';
import { Header, Subheader } from '../../lib/marketing/Typography';
import { Body } from '../../lib/elements/Typography';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  component: Typography,
  title: 'Typography'
};

export const Typography = () => (
  <>
    <Header>Header</Header>
    <Subheader>Subheader</Subheader>
    <Body>Body</Body>
  </>
);
