import { memo, ReactNode } from "react";

import Container from "./styles";

export interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
}

const ButtonComponent = ({ children, ...props }: ButtonProps) => {
  return <Container {...props}>{children}</Container>;
};

export const Button = memo(ButtonComponent);
