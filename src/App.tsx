import React from "react";
import "./App.scss";
import Button from "@mui/material/Button";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <Button>App starts here!</Button>
      </main>
      <Footer />
    </div>
  );
}

export default App;