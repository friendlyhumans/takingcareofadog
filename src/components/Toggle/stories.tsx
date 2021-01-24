import { Story, Meta } from "@storybook/react/types-6-0";
import { Toggle } from ".";
import { noop } from "../../util/fn";

export default {
  title: "Toggle",
  component: Toggle,
} as Meta;

export const Basic: Story = () => <Toggle onClick={noop} />;
