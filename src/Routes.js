import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import WorkoutSets from "./components/Workouts/Workouts";
import Challenges from "./components/Challenges/Challenges";
import Challenge from "./components/Challenges/Challenge";
import Generate from "./components/Generate/Generate";
import About from "./components/About";

export const routes = [
  {
    Title: "Workouts",
    Path: "/workouts",
    component: WorkoutSets,
    showInMenu: true,
  },
  {
    Title: "Challenges",
    Path: "/challenges",
    component: Challenges,
    showInMenu: true,
  },
  {
    Title: "Evolve: Generate",
    Path: "/generate",
    component: Generate,
    showInMenu: true,
  },
  {
    Title: "About",
    Path: "/about",
    component: About,
    showInMenu: true,
  },
  {
    Title: "Single Challenge",
    Path: "/challenges/:id",
    component: Challenge,
    showInMenu: false,
  }
];

export default class Routes extends React.PureComponent {
  renderRoutes = () => {
    return routes.map(route => {
      return <Route key={route.Path} path={route.Path} component={route.component} exact />;
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Frontpage} exact />
          {this.renderRoutes()}
        </Switch>
      </Router>
    );
  }
}
