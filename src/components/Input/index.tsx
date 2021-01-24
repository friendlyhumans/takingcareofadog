import { memo } from "react";

import Container from "./styles";

export interface InputProps {
  placeholder?: string;
  type?: string;
}

const InputComponent = ({ ...props }: InputProps) => {
  return <Container {...props} />;
};

export const Input = memo(InputComponent);
