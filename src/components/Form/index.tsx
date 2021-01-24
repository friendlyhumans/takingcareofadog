import { memo, ReactNode } from "react";

import Container from "./styles";

export interface FormProps {
  children?: ReactNode;
  onSubmit?: () => void;
}

const FormComponent = ({ children, ...props }: FormProps) => {
  return <Container {...props}>{children}</Container>;
};

export const Form = memo(FormComponent);
