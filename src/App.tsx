import { TextField } from "@mui/material";
import "./App.css";
import MuiButton from "./components/MuiButton";
import MuiTypography from "./components/MuiTypography";
import Project from "./components/Project";
import MuiTextField from "./components/MuiTextField";

function App() {
  return (
    <div className="App">
      <Project />
      {/* <MuiTypography /> */}
      <MuiButton />
      <MuiTextField />
    </div>
  );
}

export default App;
