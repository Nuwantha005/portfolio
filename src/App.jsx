"use client";

import LandingPage from "./pages/LandingPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Background from "./components/ui/Background";
import Project_CommunicationSoftware from "./pages/Project_CommunicationSoftware";
import Project_Single_DOF_Vibration from "./pages/Project_Single_DOF_Vibration";
import Project_ComplexMapping from "./pages/Project_ComplexMapping";
import "@/index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Background />}>
          <Route index element={<LandingPage />} />
          <Route
            path="/complex_mapping"
            element={<Project_ComplexMapping />}
          ></Route>
          <Route
            path="/communication_software"
            element={<Project_CommunicationSoftware />}
          />
          <Route
            path="/single_DOF_Vibration_Simulation"
            element={<Project_Single_DOF_Vibration />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
