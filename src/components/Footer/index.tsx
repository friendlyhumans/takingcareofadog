import { memo, ReactNode } from "react";

import Container from "./styles";

export interface FooterProps {
  children?: ReactNode;
}

const FooterComponent = ({ children, ...props }: FooterProps) => {
  return (
    <Container>
      <div {...props}>{children}</div>
    </Container>
  );
};

export const Footer = memo(FooterComponent);
