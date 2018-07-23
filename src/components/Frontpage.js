import React from "react";
import Layout from "./Layout";
import Filters from "./Filters";
import GeneratedWorkout from "./GeneratedWorkout";
import { Button } from "semantic-ui-react";
import { CSSTransitionGroup } from "react-transition-group";
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

  toggleFilters = () => {
    this.setState({
      hideFilters: !this.state.hideFilters
    });
    this.state.filterIcon === "caret up"
      ? this.setState({ filterIcon: "caret down" })
      : this.setState({ filterIcon: "caret up" });
  }

  toggleGenerateWorkout = () => {
    this.setState({
      hideGeneratedWorkout: false
    });
  }
  
  render() {
    const { hideFilters, hideGeneratedWorkout, filterIcon } = this.state;

    return (
      <Layout {...this.props}>
        <Button
          content="Filters"
          icon={filterIcon}
          labelPosition="right"
          color="teal"
          size="small"
          onClick={this.toggleFilters}
        />

        <Button
          content="Generate"
          color="pink"
          size="small"
          onClick={this.toggleGenerateWorkout}
        />
        <br />
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          { 
            !hideFilters ? <Filters /> : null 
          }
        </CSSTransitionGroup>
        <br />
        {
          !hideGeneratedWorkout ? <GeneratedWorkout /> : null
        }
      </Layout>
    );
  }
}
