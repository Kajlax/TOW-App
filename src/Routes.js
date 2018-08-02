import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Workouts from "./components/Workouts/Workouts";
import Challenges from "./components/Challenges/Challenges";
import Frontpage from "./components/Frontpage";
import About from "./components/About";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Workouts/Workouts" component={Workouts} exact />
          <Route path="/Challenges/Challenges" component={Challenges} exact />
          <Route path="/" component={Frontpage} exact />
          <Route path="/About" component={About} exact />
        </Switch>
      </Router>
    );
  }
}
