import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SimpleInput } from './Input';

export default {
  title: 'MY-SYSTEM/ATOM/BUTTON',
  component: SimpleInput,
} as ComponentMeta<typeof SimpleInput>;

const Template: ComponentStory<typeof SimpleInput> = (args) => <SimpleInput {...args} />;

export const Login = Template.bind({});
