import { memo, ReactNode } from "react";
import Link from "next/link";

import Container from "./styles";

export interface NavProps {
  children?: ReactNode;
}

const NavComponent = ({ children, ...props }: NavProps) => {
  return (
    <Container {...props}>
      <div>
        <h1>
          <Link href="/">Taking care of a dog 🐶</Link>
        </h1>
        &nbsp;
        <h5>(alpha)</h5>
      </div>
      {children}
    </Container>
  );
};

export const Nav = memo(NavComponent);
