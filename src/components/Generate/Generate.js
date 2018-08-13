import React from "react";
import { connectContext } from "react-connect-context";
import { Context } from "../../context";
import Layout from "../Layout";
import Filters from "./GenerateFilters";
import GeneratedWorkout from "./GeneratedWorkout";
import { Button, Grid } from "semantic-ui-react";
import { CSSTransitionGroup } from "react-transition-group";
import "../Animations.css";
import Loading from '../Loading';

const fillArrayWithRandomNumbers = (count) => {
  return new Array(count).fill().map(() => Math.floor(Math.random() * 11) + 5)
}

class Generate extends React.Component {
  constructor() {
    super();
    this.state = {
      hideFilters: false,
      filterIcon: "caret up",
      hideGeneratedWorkout: true,
      numberOfExercises: 5,
      reps: fillArrayWithRandomNumbers(5),
      loading: false,
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
    this.setState({
      loading: true,
    });

    const success = await this.props.getWorkouts();
    if (success) {
      this.setState({
        hideFilters: true,
        hideGeneratedWorkout: false,
        loading: false,
      });
    }
  };
  
  handleDropdownChange = (e, { value }) => {
    const number = parseInt(value, 10);    
    this.setState({
      numberOfExercises: parseInt(number, 10),
      reps: fillArrayWithRandomNumbers(number),
    });
  }

  updateRep = (index, value) => {
    const { reps } = this.state;
    const newReps = reps.map((v, i) => i === index ? value: v);

    if(value > 0){
      this.setState({
        reps: newReps
      });
    }
  };


  render() {
    const { loading, hideFilters, hideGeneratedWorkout, filterIcon, numberOfExercises, reps } = this.state;
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
          {
            !hideGeneratedWorkout ? 
            loading ? 
            <Grid columns={3} stackable><Loading /></Grid> :
            <GeneratedWorkout
              workouts={workouts}
              reps={reps}
              updateRep={this.updateRep}
            />
            : null }
        </CSSTransitionGroup>
      </Layout>
    );
  }
}

export default connectContext(Context)(Generate);
