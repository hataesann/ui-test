import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';

export default {
  title: 'MY-SYSTEM/PAGE/PAGES',
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Login = Template.bind({});
