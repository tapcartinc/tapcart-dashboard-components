// import React from 'react';
// import { Button } from '../../lib/elements/Button';
// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs';

// const stories = storiesOf('Button', module);

// stories.addDecorator(withKnobs);
// stories.add('button', () => (
//   <Button
//     type="primary"
//     isDisabled={boolean('Disabled', false)}
//     onClick={action('button clicked')}
//     isLoading={boolean('Loading', false)}
//   >
//     {text('Label', 'Blah')}
//   </Button>
// ));

// export default {
//   component: Button,
//   title: 'Button'
// };

// export const blah = () => (
//   <Button
//     type="primary"
//     isDisabled={boolean('Disabled', false)}
//     onClick={action('button clicked')}
//     isLoading={boolean('Loading', false)}
//   >
//     {text('Label', 'Blah')}
//   </Button>
// );

import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../lib/elements/Button';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs]
};

export const buttons = () => (
  <>
    <Button
      type="primary"
      isDisabled={boolean('Disabled', false)}
      isLoading={boolean('Loading', false)}
      onClick={action('clicked')}
    >
      {text('Label', 'Primary')}
    </Button>
    <Button
      type="secondary"
      isDisabled={boolean('Disabled', false)}
      isLoading={boolean('Loading', false)}
      onClick={action('clicked')}
    >
      {text('Label', 'Primary')}
    </Button>
    <Button
      type="delete"
      isDisabled={boolean('Disabled', false)}
      isLoading={boolean('Loading', false)}
      onClick={action('clicked')}
    >
      {text('Label', 'Primary')}
    </Button>
    <Button
      type="save"
      isDisabled={boolean('Disabled', false)}
      isLoading={boolean('Loading', false)}
      onClick={action('clicked')}
    >
      {text('Label', 'Primary')}
    </Button>
  </>
);

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
