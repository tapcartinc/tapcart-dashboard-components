import React from 'react';
import { QuoteContainer } from '../../lib/marketing/QuoteContainer';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  component: QuoteContainer,
  title: 'QuoteContainer',
  decorators: [withKnobs]
};

export const quoteContainer = () => (
  <QuoteContainer
    person="Person Sited"
    position="Person's Position"
    logo="https://www.zatista.com/sitemap/email-images/logo-placeholder.jpg"
    image="https://www.loxtonia.co.za/wp-content/uploads/2018/08/placeholder-person-man.png"
    highlighted={text('Content to highlight', 'hightlighted text')}
  >
    {text(
      'Quote',
      `The child rendered here is the sited quote and the hightlighted text is controlled by the hightlighted prop.`
    )}
  </QuoteContainer>
);
