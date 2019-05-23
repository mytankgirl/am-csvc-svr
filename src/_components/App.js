import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { history } from "_helpers";
import HomePage from "_components/HomePage";
import { LoginPage } from "_components/LoginPage";
import ServiceIntroPage from "_components/ServiceIntroPage";

import "_asset/css/style.css";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={HomePage} />
        <Route path="/service-intro" component={ServiceIntroPage} />
        <Route path="/login" component={LoginPage} />
      </Router>
    );
  }
}

export default App;
