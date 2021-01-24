import { Nav, Form, Input, Button, Toggle } from "components";
import Link from "next/link";

export interface RegisterProps {
  toggleThemeMode: () => void;
}

const Register = ({ toggleThemeMode }: RegisterProps) => {
  return (
    <>
      <Nav>
        <div>
          <Link href="/">Activity</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Toggle onClick={() => toggleThemeMode()} />
        </div>
      </Nav>
      <Form>
        <h2>Register</h2>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button disabled>Register (Invite Only)</Button>
        <br />
        <Link href="/login">Already have an account?</Link>
        <br />
        <br />
        <Link href="/">🏠</Link>
      </Form>
    </>
  );
};

export default Register;
