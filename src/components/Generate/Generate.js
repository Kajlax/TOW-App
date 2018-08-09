import React from "react";
import { connectContext } from "react-connect-context";
import { Context } from "../../context";
import Layout from "../Layout";
import Filters from "./GenerateFilters";
import GeneratedWorkout from "./GeneratedWorkout";
import { Button } from "semantic-ui-react";
import { CSSTransitionGroup } from "react-transition-group";
import "../Animations.css";

class Generate extends React.Component {
  constructor() {
    super();
    this.state = {
      hideFilters: false,
      filterIcon: "caret up",
      hideGeneratedWorkout: true,
      numberOfExercises: 5,
    };
  }
  
  toggleFilters = () => {
    const { hideFilters, filterIcon } = this.state;
    const icon = filterIcon === "caret up" ? "caret down" : "caret up";

    this.setState({
      hideFilters: !hideFilters,
      filterIcon: icon
    });
  };

  toggleGenerateWorkout = async () => {
    const success = await this.props.getWorkouts();
    if (success) {
      this.setState({
        hideFilters: true,
        hideGeneratedWorkout: false
      });
    }
  };
  
  handleDropdownChange = (e, { value }) => {
    this.setState({
      numberOfExercises: parseInt(value, 10) 
    });
  }

  render() {
    const { hideFilters, hideGeneratedWorkout, filterIcon, numberOfExercises } = this.state;
    let { workouts } = this.props;

    workouts = workouts.slice(0,numberOfExercises);
    
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
          {!hideFilters ? <Filters handleDropdownChange={this.handleDropdownChange} numberOfExercises={this.state.numberOfExercises} /> : null}
        </CSSTransitionGroup>
        <br />
        <CSSTransitionGroup
          transitionName="generated"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {!hideGeneratedWorkout ? (
            <GeneratedWorkout
              workouts={workouts}
            />
          ) : null}
        </CSSTransitionGroup>
      </Layout>
    );
  }
}

export default connectContext(Context)(Generate);
