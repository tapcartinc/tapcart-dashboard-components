import React from 'react';
import { Button } from '../../lib/elements/Button';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.add('button', () => (
  <Button
    type="primary"
    isDisabled={boolean('Disabled', false)}
    onClick={action('button clicked')}
    isLoading={boolean('Loading', false)}
  >
    {text('Label', 'Blah')}
  </Button>
));
