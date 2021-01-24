import { Nav, Form, Input, Button, Toggle } from "components";
import Link from "next/link";

export interface ResetProps {
  toggleThemeMode: () => void;
}

const Reset = ({ toggleThemeMode }: ResetProps) => {
  return (
    <>
      <Nav>
        <div>
          <Link href="/">Activity</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Toggle onClick={() => toggleThemeMode()} />
        </div>
      </Nav>
      <Form>
        <Input placeholder="Email" />
        <Button>Send Reset Link</Button>
        <br />
        <Link href="/">🏠</Link>
      </Form>
    </>
  );
};

export default Reset;
