import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Layout from "../Layout";
import Loading from "../Loading";
import WorkoutsetComponent from "./WorkoutsetComponent";
import { BackButton, DifficultyChanger } from "../Common";
import useWorkoutState from "./useWorkoutState";

const Workout = props => {
  const [difficulty, setDifficulty] = useState(1);
  const id = parseInt(props.match.params.id, 10);

  const [reduxState, reduxActions] = useWorkoutState();
  const { workoutsets, fetching, myVotes, myFavourites } = reduxState;
  const { getWorkoutSets, updateVotes, updateFavourites } = reduxActions;

  const set = workoutsets.find(c => c.id === id);

  // load workoutsets using an effect
  useEffect(() => {
    if (workoutsets.length === 0) {
      getWorkoutSets();
    }
  }, [getWorkoutSets, workoutsets]);

  return (
    <Layout {...props}>
      <DifficultyChanger currentDifficulty={difficulty} setDifficulty={setDifficulty} />
      <br />
      <br />
      <br />
      <Grid columns={1} stackable>
        {set && !fetching ? (
          <WorkoutsetComponent
            workoutset={set}
            difficulty={difficulty}
            vote={updateVotes}
            myVotes={myVotes}
            favourite={updateFavourites}
            myFavourites={myFavourites}
          />
        ) : (
          <Loading />
        )}
      </Grid>
      <BackButton to="/workouts" />
      <br />
      <br />
    </Layout>
  );
};

export default Workout;
