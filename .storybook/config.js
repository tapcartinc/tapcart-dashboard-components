import { configure, addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import GlobalStyle from '../lib/utils/_global';
import { themes } from '@storybook/theming';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addDecorator(
  withKnobs({
    escapeHTML: false
  })
);

addParameters({
  options: {
    theme: themes.dark
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

// const req = require.context('../stories', true, /.stories.js$/);
const req = require.context('../stories', true, /\.stories\.(js|mdx)$/);
// const req = require.context([
//   require.context('../stories', true, /\.stories\.mdx$/),
//   require.context('../stories', true, /\.stories\.js$/)
// ]);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
