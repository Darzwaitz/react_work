import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <h1>First comp.</h1>
    </div>
  );
}

export default App;
