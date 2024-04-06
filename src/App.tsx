import React from "react";
import "./App.css";
import { Footer, HeroSection, Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
