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
    const { hideFilters, filterIcon } = this.state;
    const icon = filterIcon === "caret up" ? "caret down" : "caret up";

    this.setState({
      hideFilters: !hideFilters,
      filterIcon: icon,
    });
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
