import { Form, Input, Button, Nav, Toggle } from "components";
// import {
//   useCallback,
//   useContext,
// } from "react";
import Link from "next/link";

export interface LoginProps {
  toggleThemeMode: () => void;
}

const Login = ({ toggleThemeMode }: LoginProps) => {
  // const handleLogin = useCallback(
  //   async (event) => {
  //     event.preventDefault();
  //     const { email, password } = event.target.elements;
  //     try {
  //       await app
  //         .auth()
  //         .signInWithEmailAndPassword(email.value, password.value);
  //       history.push("/");
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },
  //   [history],
  // );

  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Link href="/" />;
  // }

  return (
    <>
      <Nav>
        <div>
          <Link href="/">Activity</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Toggle onClick={() => toggleThemeMode()} />
        </div>
      </Nav>
      <Form>
        <h2>Login</h2>
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button>Login</Button>
        <br />
        <Link href="/register">Create an Account</Link>
        <br />
        <Link href="/reset">Forgot Password?</Link>
        <br />
        <br />
        <Link href="/">🏠</Link>
      </Form>
    </>
  );
};

export default Login;
