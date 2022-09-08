import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SinginPage } from './SinginPage';

export default {
  title: 'MY-SYSTEM/PAGE/PAGES',
  component: SinginPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SinginPage>;

const Template: ComponentStory<typeof SinginPage> = () => <SinginPage />;

export const Login = Template.bind({});