import "./App.css";
import LeftBar from "./components/LeftBar/LeftBar";
import NavBar from "./components/NavBar/NavBar";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <NavBar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
