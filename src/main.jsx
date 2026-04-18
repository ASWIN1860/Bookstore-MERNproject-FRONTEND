import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ContextApi from "./ContextApi/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="603390474199-qtjud3fs45f5vt9dafr4dc751kjk78bl.apps.googleusercontent.com">
        <ContextApi>
          <App />
        </ContextApi>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
