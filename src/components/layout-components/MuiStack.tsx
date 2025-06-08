import { Box, Divider, Stack } from "@mui/material";

const MuiStack = () => {
  return (
    <Stack
      direction="column"
      spacing={3}
      divider={<Divider orientation="horizontal" flexItem />}
      border={2}
      padding={2}
    >
      <Box>Box 1</Box>

      <Box>Box 2</Box>

      <Box>Box 3</Box>
    </Stack>
  );
};

export default MuiStack;
