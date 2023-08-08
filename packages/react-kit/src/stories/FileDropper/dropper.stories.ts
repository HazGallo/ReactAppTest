import type { Meta, StoryObj } from '@storybook/react';

import { contentTypes } from '../../components/FileDropper/types/iconTypes';
import FileDropperExample from './FileDropperExample';

const meta = {
  title: 'components/FileDropper',
  component: FileDropperExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FileDropperExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropperContent: Story = {
  args: {
    maxFiles: 1,
    maxSize: 10 * 1000 * 1000,
    type: 'audio',
    onDrop: (files: any) => {
      console.log({ files });
    },
    hasError: false,
    errorMessage: 'Error Message',
    warning: false,
    isDisabled: false,
  },
  argTypes: {
    onDrop: { table: { disable: true } },
    progressChange: { table: { disable: true } },
    onChangeProgress: { table: { disable: true } },
    onChange: { table: { disable: true } },
    type: {
      control: { type: 'select', options: contentTypes },
    },
  },
};
