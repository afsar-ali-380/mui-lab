import UiButton from "./ui/UiButton";
import UiInputField from "./ui/UiInputField";
import { MdOutlineMail } from "react-icons/md";

const Project = () => {
  const showAlert = () => {
    alert("Hello UI Button");
  };

  return (
    <div style={{ width: "50vw", margin: "auto", border: "2px solid" }}>
      App
      <div>
        <UiButton onClick={showAlert}>Ui Button</UiButton>

        <UiInputField
          label="Email"
          placeholder="Email"
          startIcon={<MdOutlineMail />}
        />

        <UiInputField
          label="Email"
          placeholder="Email"
          endIcon={<MdOutlineMail />}
        />
      </div>
    </div>
  );
};

export default Project;
