import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import About from "./components/About";
import SavedWorkout from "./components/SavedWorkout";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <Router basename="/evolve"> 
        <Switch>
          <Route path="/" component={Frontpage} exact />
          <Route path="/About" component={About} exact />
          <Route path="/w/:name" component={SavedWorkout} exact />
        </Switch>
      </Router>
    );
  }
}
