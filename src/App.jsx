"use client";

import LandingPage from "./pages/LandingPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Background from "./components/ui/Background";
import Project_CommunicationSoftware from "./pages/Project_CommunicationSoftware";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Background className="overflow-scroll" />}>
          <Route index element={<LandingPage />} />
          <Route
            path="/communication_software"
            element={<Project_CommunicationSoftware />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
