import { Button, ButtonProps } from "@mui/material";
import React from "react";

const CustomButton: React.FC<ButtonProps> = ({
  children,
  sx,
  variant = "contained",
  type = "button",
  size = "small",
  color = "error",
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      sx={{
        textTransform: "none",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
