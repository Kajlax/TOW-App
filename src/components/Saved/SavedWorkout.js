import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Message } from "semantic-ui-react";
import Layout from "../Layout";
import WorkoutComponent from "./WorkoutComponent";
import SavedWorkoutTypes from "../../redux/reducers/savedworkoutRedux";
import Loading from "../Loading";

const SavedWorkout = props => {
  const workout = useSelector(state => state.savedworkout.workout);
  const fetching = useSelector(state => state.savedworkout.fetching);
  const error = useSelector(state => state.savedworkout.error);

  const dispatch = useDispatch();
  const fetchSavedWorkout = useCallback(name => dispatch(SavedWorkoutTypes.fetchSavedWorkout(name)), [dispatch]);

  const { name } = props.match.params;

  useEffect(() => {
    fetchSavedWorkout(name);
  }, [fetchSavedWorkout, name]);

  return (
    <Layout {...props}>
      {error ? (
        <Message negative>
          <Message.Header>{error}</Message.Header>
        </Message>
      ) : null}
      <Grid columns={1} stackable>
        {!error && !fetching && workout.name ? <WorkoutComponent workout={workout} /> : <Loading />}
      </Grid>
    </Layout>
  );
};

export default SavedWorkout;
