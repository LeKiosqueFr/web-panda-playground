import type { Meta, StoryObj } from '@storybook/vue3';
import { css } from '../../styled-system/css';
import { Button } from 'components-panda';
// More on how to se©t up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    visual: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined', 'text'],
    },
    label: { control: 'text' },
  },
  args: { visual: 'primary', label: 'button' }, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    visual: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    visual: 'secondary',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    visual: 'outlined',
    label: 'Button',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    visual: 'text',
    label: 'Button',
    size: 'sm',
  },
};
