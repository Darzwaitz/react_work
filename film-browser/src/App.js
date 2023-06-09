import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SearchView from "./components/SearchView";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  // const [searchResults, setSearchResults] = useState([]);
  const [searchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {}, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={About} />
        {/* <Route path="/search" component={SearchView} /> */}
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
