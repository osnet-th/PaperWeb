import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Header } from './Header';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
      title: "Blog",
  },
};