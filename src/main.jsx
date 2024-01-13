import React from "react";
import ReactDOM from "react-dom/client"; // It will renders the files in the web
import Board from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* All jsx files excluding this, will be rendered by Board component */}
    <Board />
  </React.StrictMode>
);
