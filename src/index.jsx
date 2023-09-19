import React from "react";
import ReactDOMClient from "react-dom/client";
import { ClarifionUpsell } from "./screens/ClarifionUpsell";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ClarifionUpsell />);
