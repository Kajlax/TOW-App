import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import About from "./components/About";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Frontpage} exact />
          <Route path="/About" component={About} exact />
        </Switch>
      </Router>
    );
  }
}
