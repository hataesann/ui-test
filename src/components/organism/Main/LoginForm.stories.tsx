import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginForm } from './LoginForm';

export default {
  title: 'MY-SYSTEM/ORGANISM/LOGINPAGE',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Login = Template.bind({});
Login.args = {
  title: 'ログイン画面',
  submitText: 'ログイン',
};
export const Singin = Template.bind({});
Singin.args = {
  title: '新規登録',
  submitText: '登録',
};
