import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => <Button label='Click me' onClick={() => alert('Clicked!')} />)
  .add('with emoji', () => <Button label='😀 😎 👍 💯' onClick={() => alert('Clicked!')} />);
