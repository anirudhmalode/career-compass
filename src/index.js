import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./index.scss";
import App from "./App.tsx";
import { ClerkProvider } from "@clerk/clerk-react";

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const PUBLISHABLE_KEY = 'pk_test_cmF0aW9uYWwtdGFoci05Mi5jbGVyay5hY2NvdW50cy5kZXYk'; // need to check why it is not working with .env

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ClerkProvider>
  </React.StrictMode>
);
