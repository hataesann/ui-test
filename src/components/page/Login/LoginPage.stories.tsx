import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginPage } from './LoginPage';

export default {
  title: 'MY-SYSTEM/PAGE/PAGES',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => <LoginPage {...args} />;

export const Login = Template.bind({});
Login.args = {};

/* export const Logout = Template.bind({});
Logout.args = {
  pageType: 'Logout',
};

export const Singin = Template.bind({});
Singin.args = {
  pageType: 'Singin',
};
 */
