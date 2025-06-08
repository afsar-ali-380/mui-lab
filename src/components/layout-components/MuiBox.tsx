import { Box } from "@mui/material";

const MuiBox = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          padding: 2,
          borderRadius: 2,
        }}
      >
        Hello, there!
      </Box>

      <Box
        sx={{
          backgroundColor: "orange",
          padding: 2,
          borderRadius: 2,
          "&: hover": { backgroundColor: "yellowgreen" },
        }}
        component="span"
      >
        Box 2
      </Box>

      <Box
        display="flex"
        height="200px"
        width="200px"
        bgcolor="success.light"
        padding={2}
        borderRadius={2}
      >
        Box 3
      </Box>
    </>
  );
};

export default MuiBox;
