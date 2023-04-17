import type { Meta, StoryObj } from '@storybook/react';
import { contentTypes } from '../../components/FileDropper/types/iconTypes';
import { FileDropper } from '../../components/FileDropper/index';

const meta = {
  title: 'components/FileDropper',
  component: FileDropper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FileDropper>;

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
    disabled: false
  },
  argTypes: {
    type: {
      control: { type: 'select', options: contentTypes },
    },
  },
};
