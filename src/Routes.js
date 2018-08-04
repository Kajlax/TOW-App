import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import Workouts from "./components/Workouts/Workouts";
import Challenges from "./components/Challenges/Challenges";
import Generate from "./components/Generate/Generate";
import About from "./components/About";

export const routes = [
  {
    Title: "Workouts",
    Path: "/workouts",
    component: Workouts,
  },
  {
    Title: "Challenges",
    Path: "/challenges",
    component: Challenges,
  },
  {
    Title: "Evolve: Generate",
    Path: "/generate",
    component: Generate,
  },
  {
    Title: "About",
    Path: "/about",
    component: About,
  }
];

export default class Routes extends React.PureComponent {
  renderRoutes = () => {
    return routes.map(route => {
      return <Route path={route.Path} component={route.component} exact />;
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Frontpage} exact />
          {
            this.renderRoutes()
          }
        </Switch>
      </Router>
    );
  }
}
