import { Button, Stack } from "@mui/material";
import { IoMdSend } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";

const MuiButton = () => {
  return (
    <>
      <Button variant="contained" color="success" size="small">
        BUTTON
      </Button>

      <Button
        variant="contained"
        color="warning"
        size="small"
        href="https://www.google.com"
        target="_blank"
        component="a"
      >
        LINK
      </Button>

      <Button variant="contained" disabled>
        Disabled Button
      </Button>

      <Button
        variant="outlined"
        size="medium"
        color="info"
        startIcon={<IoMdSend />}
      >
        SEND
      </Button>

      <Button
        variant="outlined"
        size="medium"
        color="error"
        endIcon={<FaDeleteLeft />}
      >
        DELETE
      </Button>

      <Stack direction="row" spacing={2}>
        <Button variant="text">TEXT</Button>
        <Button variant="contained">CONTAINED</Button>
        <Button variant="outlined">OUTLINED</Button>
        <Button variant="contained" href="https://www.facebook.com">
          LINK
        </Button>
      </Stack>
    </>
  );
};

export default MuiButton;
