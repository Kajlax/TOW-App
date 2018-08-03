import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import Workouts from "./components/Workouts/Workouts";
import Challenges from "./components/Challenges/Challenges";
import Generate from "./components/Generate/Generate";
import About from "./components/About";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Frontpage} exact />
          <Route path="/workouts" component={Workouts} exact />
          <Route path="/challenges" component={Challenges} exact />
          <Route path="/generate" component={Generate} exact />
          <Route path="/about" component={About} exact />
        </Switch>
      </Router>
    );
  }
}
