import { useState } from "react";
import "./App.css";
import LeftBar from "./components/leftBar/leftBar";
import TopBar from "./components/topBar/topBar";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
