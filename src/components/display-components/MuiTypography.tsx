import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        color="error"
        gutterBottom
      >
        Hello World
      </Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      <Typography variant="body1" component="p" align="justify" paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus?
      </Typography>

      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
        quae.
      </Typography>

      <Typography variant="caption">Caption</Typography>

      <br />
      <Typography variant="overline">Overline</Typography>

      <br />
      <Typography variant="button">Button</Typography>
    </>
  );
};

export default MuiTypography;
