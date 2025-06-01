import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface UiButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const UiButton: React.FC<UiButtonProps> = ({
  children,
  variant = "contained",
  size = "small",
  color = "error",
  ...rest
}) => {
  return (
    <Button variant={variant} size={size} color={color} {...rest}>
      {children}
    </Button>
  );
};

export default UiButton;
