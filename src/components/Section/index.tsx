import { memo, ReactNode } from "react";

import Container from "./styles";

export interface SectionProps {
  children?: ReactNode;
}

const SectionComponent = ({ children, ...props }: SectionProps) => {
  return (
    <Container>
      <div {...props}>{children}</div>
    </Container>
  );
};

export const Section = memo(SectionComponent);
