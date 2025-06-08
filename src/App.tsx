import "./App.css";
import Project from "./components/Project";
import MuiBox from "./components/layout-components/MuiBox";
import MuiStack from "./components/layout-components/MuiStack";
import MuiGrid from "./components/layout-components/MuiGrid";
import MuiTypography from "./components/display-components/MuiTypography";
import MuiTextField from "./components/form-components/MuiTextField";
import MuiButton from "./components/form-components/MuiButton";
import MuiIconButton from "./components/form-components/MuiIconButton";

function App() {
  return (
    <div className="App">
      <Project />

      {/* <MuiBox /> */}
      {/* <MuiStack /> */}
      <MuiGrid />

      {/* <MuiTypography /> */}

      <MuiTextField />
      <MuiButton />
      {/* <MuiIconButton /> */}
    </div>
  );
}

export default App;
