import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LogoutPage } from './LogoutPage';

export default {
  title: 'MY-SYSTEM/PAGE/PAGES',
  component: LogoutPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LogoutPage>;

const Template: ComponentStory<typeof LogoutPage> = () => <LogoutPage />;

export const Login = Template.bind({});
