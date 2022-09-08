import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'MY-SYSTEM/ATOM/BUTTON',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Login = Template.bind({});
Login.args = {
  type: 'login',
  label: 'ログイン',
};
Login.parameters = {
  design: {
    type: '',
    url: '',
  },
};

export const Logout = Template.bind({});
Logout.args = {
  type: 'logout',
  isLoggin: false,
  label: 'ログアウト',
};

export const Singin = Template.bind({});
Singin.args = {
  type: 'singin',
  label: '新規登録',
};

export const LoginExe = Template.bind({});
LoginExe.args = {
  type: 'submit',
  label: '送信',
};
