import { TextField } from "@mui/material";

const MuiTextField = () => {
  return (
    <>
      <TextField
        type="text"
        variant="outlined"
        size="small"
        label="Email"
        fullWidth
        placeholder="Enter here"
      />
    </>
  );
};

export default MuiTextField;
