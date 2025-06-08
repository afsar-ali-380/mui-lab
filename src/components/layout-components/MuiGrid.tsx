import { Grid } from "@mui/material";

const MuiGrid = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "royalblue", padding: 2 }}
    >
      <Grid
        size={{ xs: 12, sm: 6, md: 4 }}
        sx={{ backgroundColor: "red", padding: 2 }}
      >
        Box 1
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6, md: 4 }}
        sx={{ backgroundColor: "green", padding: 2 }}
      >
        Box 2
      </Grid>
    </Grid>
  );
};

export default MuiGrid;
