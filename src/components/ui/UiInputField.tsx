import React from "react";
import { TextField, TextFieldProps, InputAdornment } from "@mui/material";

type UiInputFieldProps = TextFieldProps & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const UiInputField: React.FC<UiInputFieldProps> = ({
  type = "text",
  variant = "outlined",
  size = "small",
  margin = "dense",
  error = false,
  helperText = "",
  startIcon,
  endIcon,
  sx,
  ...rest
}) => {
  return (
    <TextField
      type={type}
      variant={variant}
      size={size}
      margin={margin}
      error={error}
      helperText={helperText}
      slotProps={{
        input: {
          startAdornment: startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : undefined,
          endAdornment: endIcon ? (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ) : undefined,
        },
      }}
      sx={{
        "& .MuiInputBase-input": {
          fontSize: "15px",
        },
        "& .MuiInputLabel-root": {
          fontSize: "15px",
        },
        ...sx,
      }}
      {...rest}
    />
  );
};

export default UiInputField;
