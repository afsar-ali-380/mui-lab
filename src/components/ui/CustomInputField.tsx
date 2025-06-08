import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

type CustomInputFieldProps = TextFieldProps & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  type = "text",
  variant = "outlined",
  size = "small",
  fullWidth = false,
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
      fullWidth={fullWidth}
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
          fontSize: "14px",
        },
        "& .MuiInputLabel-root": {
          fontSize: "14px",
        },
        ...sx,
      }}
      {...rest}
    />
  );
};

export default CustomInputField;
