import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homepage/Home";
import Subscribe from "./pages/subscribe/Subscribe";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/subscribe" component={Subscribe} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
