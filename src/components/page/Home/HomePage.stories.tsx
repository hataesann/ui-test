import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomePage } from './HomePage';

export default {
  title: 'MY-SYSTEM/PAGE/PAGES',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const Login = Template.bind({});
