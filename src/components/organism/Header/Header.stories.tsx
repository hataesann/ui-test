import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'MY-SYSTEM/ORGANISM/HEADER',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Logouted = Template.bind({});
Logouted.args = {
  isLogin: false,
};

export const Logined = Template.bind({});
Logined.args = {
  isLogin: true,
};
