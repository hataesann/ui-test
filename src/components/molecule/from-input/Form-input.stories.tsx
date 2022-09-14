import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormInput } from './FormInput';

export default {
  title: 'MY-SYSTEM/MOLECULE/INPUT',
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Test = Template.bind({});
Test.args = {
  id: 'test',
  name: 'test',
  type: 'text',
  label: 'テスト',
};
