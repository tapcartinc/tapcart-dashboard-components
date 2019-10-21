import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

import GlobalStyle from '../lib/utils/_global';

addParameters({
  options: {
    theme: themes.light
  }
});

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

configure(
  [
    require.context('../stories', true, /\.stories\.mdx$/),
    require.context('../stories', true, /\.stories\.js$/)
  ],
  module
);
