import type { Meta, StoryObj } from '@storybook/react';
import { ExampleInputText } from './ExampleInputText';

const meta = {
  title: 'Components/InputText',
  component: ExampleInputText,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof ExampleInputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    hasError: false,
    placeholder: 'Placeholder',
    iconRight: 'noIco',
    iconLeft: 'IconGhost',
    warning: false,
    sizes: 'md',
    value: 'IsEazy Engage',
    errorMessage: 'Error Message',
    isDisabled: false,
    backgroundType: "primary"
  },
  argTypes: {
    autoFocus: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    iconRight: {
      control: { type: 'select' },
    },
    iconLeft: {
      control: { type: 'select' },
    },
    sizes: {
      control: { type: 'select' },
    },
    backgroundType: {
      control: { type: 'select' },
    },
  },
};
