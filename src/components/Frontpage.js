import React from "react";
import Layout from "./Layout";
import Filters from "./Filters";
import GeneratedWorkout from "./GeneratedWorkout";
import { Button } from "semantic-ui-react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./Animations.css";

export default class Frontpage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      hideFilters: false,
      filterIcon: "caret up",
      hideGeneratedWorkout: true
    };
  }

  toggleFilters() {
    this.setState({
      hideFilters: !this.state.hideFilters
    });
    this.state.filterIcon === "caret up"
      ? this.setState({ filterIcon: "caret down" })
      : this.setState({ filterIcon: "caret up" });
  }

  toggleGenerateWorkout() {
    this.setState({
      hideFilters: true,
      hideGeneratedWorkout: false
    });
  }

  render() {
    return (
      <Layout {...this.props}>
        <Button
          content="Filters"
          icon={this.state.filterIcon}
          labelPosition="right"
          color="teal"
          size="small"
          onClick={this.toggleFilters.bind(this)}
        />

        <Button
          content="Generate"
          color="pink"
          size="small"
          onClick={this.toggleGenerateWorkout.bind(this)}
        />
        <br />
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {!this.state.hideFilters && <ChildFilters />}
        </ReactCSSTransitionGroup>
        <br />
        {!this.state.hideGeneratedWorkout && <ChildGeneratedWorkout />}
      </Layout>
    );
  }
}

const ChildFilters = () => (
  <ReactCSSTransitionGroup
    transitionName="example"
    transitionEnterTimeout={200}
    transitionLeaveTimeout={200}
  >
    <Filters />
  </ReactCSSTransitionGroup>
);
const ChildGeneratedWorkout = () => <GeneratedWorkout />;
