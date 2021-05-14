import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./pages/MenuPage/MenuPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";


import "./App.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </Router>
  );
}

export default App;
