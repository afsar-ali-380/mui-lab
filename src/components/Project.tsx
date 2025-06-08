import { Box, Stack } from "@mui/material";
import { MdOutlineMail } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import CustomTypography from "./ui/CustomTypography";
import CustomInputField from "./ui/CustomInputField";
import CustomButton from "./ui/CustomButton";

const Project = () => {
  const showAlert = () => {
    alert("Hello UI Button");
  };

  return (
    <Box sx={{ width: "50vw", margin: "auto", border: 1, padding: 2 }}>
      <CustomTypography>App</CustomTypography>

      <Stack direction="row" spacing={2}>
        <CustomButton onClick={showAlert}>UI Button</CustomButton>
        <CustomButton startIcon={<MdOutlineMail />}>DELETE</CustomButton>
        <CustomButton color="info" endIcon={<IoMdSend />}>
          Send
        </CustomButton>
      </Stack>

      <Stack spacing={2} paddingY={1}>
        <Box>
          <CustomInputField label="email" />
        </Box>
        <CustomInputField />
        <Box display="flex" flexDirection="row" gap={2}>
          <CustomInputField label="username" endIcon={<MdOutlineMail />} />
          <CustomInputField
            placeholder="Enter Email"
            startIcon={<MdOutlineMail />}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Project;
