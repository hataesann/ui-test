import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SimpleButton } from "./SimpleButton";

export default {
  title: "MY-SYSTEM/ATOM/BUTTON/SIMPLE",
  component: SimpleButton,
} as ComponentMeta<typeof SimpleButton>;

const Template: ComponentStory<typeof SimpleButton> = (args) => <SimpleButton {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  color: "blue"
}

export const Red = Template.bind({});
Red.args = {
  color: "red"
}

export const White = Template.bind({});
White.args = {
  color: "white"
}