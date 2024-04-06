import React from "react";
import "./App.css";
import { Footer, HeroSection, Navbar, OverLay } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <OverLay />
      <Footer />
    </div>
  );
}

export default App;
