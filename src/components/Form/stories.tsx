import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, Form, Input } from "../../components";

export default {
  title: "Form",
  component: Form,
} as Meta;

export const Basic: Story = () => (
  <Form>
    <Input />
    <Input />
    <Button>SUBMIT</Button>
  </Form>
);
