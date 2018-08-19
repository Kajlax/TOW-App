import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { CSSTransitionGroup } from "react-transition-group";
import { connect } from 'react-redux';
import Layout from "../Layout";
import Filters from "./GenerateFilters";
import GeneratedWorkout from "./GeneratedWorkout";
import Loading from '../Loading';
import "../Animations.css";
import WorkoutActions from '../../redux/reducers/workoutRedux';

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

  toggleGenerateWorkout = () => {
    const { getWorkouts, filters } = this.props;

    getWorkouts(filters);
    
    this.setState({
      hideFilters: true,
      hideGeneratedWorkout: false,
      loading: false,
      reps: fillArrayWithRandomNumbers(this.state.numberOfExercises),
    });
  
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
    const { hideFilters, hideGeneratedWorkout, filterIcon, numberOfExercises, reps } = this.state;
    let { fetching, workouts, filters, updateFilters } = this.props;

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
          {
            !hideFilters ?
            <Filters
              handleDropdownChange={this.handleDropdownChange}
              numberOfExercises={this.state.numberOfExercises}
              filters={filters}
              updateFilters={updateFilters}
            />
            :
            null
          }
        </CSSTransitionGroup>
        <br />
        <CSSTransitionGroup
          transitionName="generated"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {
            !hideGeneratedWorkout ? 
            fetching ? 
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

const mapStateToProps = (state) => ({
  workouts: state.workout.workouts,
  filters: state.workout.filters,
  fetching: state.workout.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (value) => dispatch(WorkoutActions.updateFilters(value)),
  getWorkouts: (filters) => dispatch(WorkoutActions.fetchWorkouts(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Generate);
