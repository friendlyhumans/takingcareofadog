import { Nav, Section, Toggle } from "components";
import Link from "next/link";
import { DefaultTheme } from "styled-components";

export interface HomeProps {
  theme: DefaultTheme;
  toggleThemeMode: () => void;
}

const Home = ({ toggleThemeMode }: HomeProps) => {
  const isLoggedIn = false;

  return (
    <>
      <Nav>
        <div>
          <Link href="/login">Login</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/register">Register</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {isLoggedIn && <Link href="/profile">Profile</Link>}
          <Toggle onClick={() => toggleThemeMode()} />
        </div>
      </Nav>
      <Section>
        <h2>Activity</h2>
        <li>sue just posted a link.</li>
        <li>sue just joined.</li>
        <li>my just joined.</li>
      </Section>
    </>
  );
};

export default Home;
