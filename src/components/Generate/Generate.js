import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { CSSTransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import Layout from "../Layout";
import Filters from "./GenerateFilters";
import GeneratedWorkout from "./GeneratedWorkout";
import Loading from "../Loading";
import "../Animations.css";
import WorkoutActions from "../../redux/reducers/workoutRedux";
import SaveWorkoutActions from "../../redux/reducers/savedworkoutRedux";

const fillArrayWithRandomNumbers = count => {
  return new Array(count).fill().map(() => Math.floor(Math.random() * 11) + 5);
};

class Generate extends React.Component {
  constructor() {
    super();
    this.state = {
      hideFilters: false,
      filterIcon: "caret up",
      hideGeneratedWorkout: true,
      numberOfExercises: 5,
      difficulty: 2,
      workoutType: "Calisthenics",
      bodypart: "Upper body",
      reps: fillArrayWithRandomNumbers(5)
    };
  }

  componentDidMount() {
    this.props.resetCreated();
    this.props.updateFilters(this.state.workoutType);
    this.props.updateFilters(this.state.bodypart);
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
    const { difficulty } = this.state;

    getWorkouts(filters.length > 0 ? filters : null, difficulty);

    this.setState({
      hideFilters: true,
      hideGeneratedWorkout: false,
      loading: false,
      reps: fillArrayWithRandomNumbers(this.state.numberOfExercises)
    });
  };

  handleDropdownChange = (e, { value }) => {
    const number = parseInt(value, 10);
    this.setState({
      numberOfExercises: parseInt(number, 10),
      reps: fillArrayWithRandomNumbers(number)
    });
  };

  updateRep = (index, value) => {
    const { reps } = this.state;
    const newReps = reps.map((v, i) => (i === index ? value : v));

    if (value > 0) {
      this.setState({
        reps: newReps
      });
    }
  };

  updateWorkoutType = workoutType => {
    this.props.updateFilters(this.state.workoutType);
    this.props.updateFilters(workoutType);
    this.setState({
      workoutType
    });
  };

  updateBodypart = bodypart => {
    this.props.updateFilters(this.state.bodypart);
    this.props.updateFilters(bodypart);
    this.setState({
      bodypart
    });
  };

  updateDifficulty = difficulty => {
    this.setState({
      difficulty
    });
  };

  render() {
    const {
      hideFilters,
      hideGeneratedWorkout,
      filterIcon,
      numberOfExercises,
      reps
    } = this.state;
    let {
      fetching,
      workouts,
      filters,
      updateFilters,
      createSavedWorkout,
      saving,
      newWorkout
    } = this.props;

    workouts = workouts.slice(0, numberOfExercises);

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
          {!hideFilters ? (
            <Filters
              handleDropdownChange={this.handleDropdownChange}
              numberOfExercises={this.state.numberOfExercises}
              filters={filters}
              updateFilters={updateFilters}
              workoutType={this.state.workoutType}
              updateWorkoutType={this.updateWorkoutType}
              bodypart={this.state.bodypart}
              updateBodypart={this.updateBodypart}
              difficulty={this.state.difficulty}
              updateDifficulty={this.updateDifficulty}
            />
          ) : null}
        </CSSTransitionGroup>
        <br /> <br />
        <CSSTransitionGroup
          transitionName="generated"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {!hideGeneratedWorkout ? (
            fetching ? (
              <Grid columns={3} stackable>
                <Loading />
              </Grid>
            ) : (
              <GeneratedWorkout
                workouts={workouts}
                reps={reps}
                updateRep={this.updateRep}
                saveWorkout={createSavedWorkout}
                saving={saving}
                workoutname={newWorkout.name}
              />
            )
          ) : null}
        </CSSTransitionGroup>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.workout.workouts,
  filters: state.workout.filters,
  fetching: state.workout.fetching,
  saving: state.savedworkout.saving,
  newWorkout: state.savedworkout.newWorkout
});

const mapDispatchToProps = dispatch => ({
  updateFilters: value => dispatch(WorkoutActions.updateFilters(value)),
  getWorkouts: (filters, difficulty) =>
    dispatch(WorkoutActions.fetchWorkouts(filters, difficulty)),
  createSavedWorkout: data =>
    dispatch(SaveWorkoutActions.createSavedWorkout(data)),
  resetCreated: () => dispatch(SaveWorkoutActions.resetSavedWorkout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generate);
