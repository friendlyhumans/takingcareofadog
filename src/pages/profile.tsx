import { Nav, Section, Toggle } from "components";
import Link from "next/link";

export interface ProfileProps {
  toggleThemeMode: () => void;
}

const Profile = ({ toggleThemeMode }: ProfileProps) => {
  return (
    <>
      <Nav>
        <div>
          <Link href="/">Activity</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Toggle onClick={() => toggleThemeMode()} />
        </div>
      </Nav>
      <Section>Activity</Section>
    </>
  );
};

export default Profile;
