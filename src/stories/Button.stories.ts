import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '../components/Button.vue';
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
      options: [
        'primary',
        'secondary',
        'outlinePrimary',
        'outlineSecondary',
        'link',
      ],
    },
    label: { control: 'text' },
  },
  args: { visual: 'primary', size: 'sm', label: 'button' }, // default value
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
    size: 'sm',
  },
};

export const Secondary: Story = {
  args: {
    visual: 'secondary',
    label: 'Button',
    size: 'sm',
  },
};
export const OutlinePrimary: Story = {
  args: {
    visual: 'outlinePrimary',
    label: 'Button',
    size: 'lg',
  },
};
export const OutlineSecondary: Story = {
  args: {
    visual: 'outlineSecondary',
    label: 'Button',
    size: 'lg',
  },
};
export const Link: Story = {
  args: {
    visual: 'link',
    label: 'Button',
    size: 'sm',
  },
};

export const Small: Story = {
  args: {
    visual: 'primary',
    label: 'Button',
    size: 'sm',
  },
};
export const Medium: Story = {
  args: {
    visual: 'primary',
    label: 'Button',
    size: 'md',
  },
};
export const Large: Story = {
  args: {
    visual: 'primary',
    label: 'Button',
    size: 'lg',
  },
};
export const ExtraLarge: Story = {
  args: {
    visual: 'primary',
    label: 'Button',
    size: 'xl',
  },
};
