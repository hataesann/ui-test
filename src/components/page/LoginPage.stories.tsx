import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginPage } from './LoginPage';

export default {
  title: "MY-SYSTEM/PAGE",
  component: LoginPage,
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => <LoginPage {...args} />;

export const Login = Template.bind({});