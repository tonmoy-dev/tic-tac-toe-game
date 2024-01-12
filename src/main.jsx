import React from "react";
import ReactDOM from "react-dom/client"; // It will renders the files in the web
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// All jsx files excluding app.jsx, will be rendered by this App component */
