import { memo } from "react";
import { motion } from "framer-motion";

import Container from "./styles";

export interface ToggleProps {
  onClick: () => void;
}

const ToggleComponent = ({ onClick }: ToggleProps) => {
  return (
    <Container>
      <div className="switch" onClick={onClick}>
        <motion.div layout />
      </div>
    </Container>
  );
};

export const Toggle = memo(ToggleComponent);
