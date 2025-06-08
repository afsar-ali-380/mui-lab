import { TextField } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [inp, setInp] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInp(e.target.value);

  return (
    <>
      <TextField
        label="username"
        variant="outlined"
        type="text"
        size="small"
        fullWidth
        placeholder="Enter here"
        value={inp}
        onChange={handleChange}
      />
    </>
  );
};

export default MuiTextField;
