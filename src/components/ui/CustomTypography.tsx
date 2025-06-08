import { Typography, TypographyProps } from "@mui/material";

type CustomTypographyProps = TypographyProps & {
  bold?: false;
};

const CustomTypography: React.FC<CustomTypographyProps> = ({
  children,
  sx,
  bold,
  variant = "body1",
  color = "text.primary",
  ...rest
}) => {
  return (
    <Typography
      variant={variant}
      color={color}
      sx={{ fontWeight: bold ? 700 : 400, ...sx }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
