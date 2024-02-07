import type { Meta, StoryObj } from '@storybook/vue3';
import Concept from '../components/Concept.vue';
// More on how to se©t up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Concept',
  component: Concept,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    name: { control: 'text' },
    id: { control: 'text' },
  },
  args: { name: 'primary', color: 'red.300', id: '0' }, // default value
} satisfies Meta<typeof Concept>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    name: 'Button',
    color: 'red.300',
    id: '0',
  },
};
