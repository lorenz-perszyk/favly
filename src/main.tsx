import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/normalize.css";
import "./styles/index.css";
import "./styles/css_animations.css";
import "./styles/fonts.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

);
