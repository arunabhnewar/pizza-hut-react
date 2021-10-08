import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Home from './Components/Home/Home';
import Menu from "./Components/Menu/Menu";
import NavMenuBar from "./Components/NavMenuBar/NavMenuBar";
import NotFound from "./Components/NotFound/NotFound";


function App() {
  return (
    <div className="App">
      <Router>
        <NavMenuBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
