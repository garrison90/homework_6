import React from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
