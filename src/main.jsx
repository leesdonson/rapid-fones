import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./contexts/FilterContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <FilterProvider>
        <App />
      </FilterProvider>
    </Router>
  </StrictMode>
);
