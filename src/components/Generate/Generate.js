import React, { useState, useEffect } from "react";
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

const Generate = props => {
  const [hideFilters, setHideFilters] = useState(true);
  const [hideGeneratedWorkout, setHideGeneratedWorkout] = useState(true);
  const [numberOfExercises, setNumberOfExercises] = useState(5);
  const [reps, setReps] = useState(fillArrayWithRandomNumbers(5));
  const [difficulty, setDifficulty] = useState(2);
  const [workoutType, setWorkoutType] = useState("Calisthenics");
  const [bodypart, setBodypart] = useState("Upper body");
  let { fetching, workouts, filters, updateFilters, createSavedWorkout, saving, newWorkout, resetCreated, getWorkouts } = props;

  useEffect(() => {
    resetCreated();
  }, [resetCreated]);

  useEffect(() => {
    updateFilters(bodypart);
  }, [updateFilters, bodypart]);

  useEffect(() => {
    updateFilters(workoutType);
  }, [updateFilters, workoutType]);

  const toggleGenerateWorkout = () => {
    getWorkouts(filters.length > 0 ? filters : null, difficulty);

    setHideFilters(true);
    setHideGeneratedWorkout(false);
  };

  const updateRep = (index, value) => {
    const newReps = reps.map((v, i) => (i === index ? value : v));
    setReps(newReps);
  };

  const getIcon = () => (hideFilters ? "caret up" : "caret down");

  const handleDropdownChange = (e, { value }) => {
    const newRepCount = parseInt(value, 10);
    setNumberOfExercises(newRepCount);
    setReps(fillArrayWithRandomNumbers(newRepCount));
  };

  const updateWorkoutType = newType => {
    updateFilters(workoutType);
    setWorkoutType(newType);
  };

  const updateBodypart = newBodypart => {
    updateFilters(bodypart);
    setBodypart(newBodypart);
  };

  const shownWorkouts = workouts.slice(0, numberOfExercises);

  console.info(reps);

  return (
    <Layout {...props}>
      <Button content="Filters" icon={getIcon()} labelPosition="right" color="teal" size="small" onClick={() => setHideFilters(!hideFilters)} />
      <Button content="Generate" color="pink" size="small" onClick={toggleGenerateWorkout} />
      <br />
      <CSSTransitionGroup transitionName="example" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
        {!hideFilters ? (
          <Filters
            handleDropdownChange={handleDropdownChange}
            numberOfExercises={numberOfExercises}
            filters={filters}
            workoutType={workoutType}
            updateWorkoutType={updateWorkoutType}
            bodypart={bodypart}
            updateBodypart={updateBodypart}
            difficulty={difficulty}
            updateDifficulty={value => setDifficulty(value)}
          />
        ) : null}
      </CSSTransitionGroup>
      <br /> <br />
      <CSSTransitionGroup transitionName="generated" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
        {!hideGeneratedWorkout ? (
          fetching ? (
            <Grid columns={3} stackable>
              <Loading />
            </Grid>
          ) : (
            <GeneratedWorkout
              workouts={shownWorkouts}
              reps={reps}
              updateRep={updateRep}
              saveWorkout={createSavedWorkout}
              saving={saving}
              workoutname={newWorkout.name}
            />
          )
        ) : null}
      </CSSTransitionGroup>
    </Layout>
  );
};

const mapStateToProps = state => ({
  workouts: state.workout.workouts,
  filters: state.workout.filters,
  fetching: state.workout.fetching,
  saving: state.savedworkout.saving,
  newWorkout: state.savedworkout.newWorkout,
});

const mapDispatchToProps = dispatch => ({
  updateFilters: value => dispatch(WorkoutActions.updateFilters(value)),
  getWorkouts: (filters, difficulty) => dispatch(WorkoutActions.fetchWorkouts(filters, difficulty)),
  createSavedWorkout: data => dispatch(SaveWorkoutActions.createSavedWorkout(data)),
  resetCreated: () => dispatch(SaveWorkoutActions.resetSavedWorkout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generate);
