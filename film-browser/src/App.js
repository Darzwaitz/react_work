import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
