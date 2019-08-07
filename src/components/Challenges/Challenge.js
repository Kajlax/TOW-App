import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ChallengeComponent from "./ChallengeComponent";
import Layout from "../Layout";
import Loading from "../Loading";
import { DifficultyChanger, BackButton } from "../Common";
import useChallengeState from "./useChallengeState";

const Challenge = props => {
  const [reduxState, reduxActions] = useChallengeState();
  const { challenges, fetching, myVotes, myFavourites } = reduxState;
  const { updateVotes, updateFavourites, getChallenges } = reduxActions;

  const [difficulty, setDifficulty] = useState(1);
  const id = parseInt(props.match.params.id, 10);
  const challenge = challenges.find(c => c.id === id);

  useEffect(() => {
    if (challenges.length === 0) {
      getChallenges();
    }
  }, [getChallenges, challenges]);

  const SelectedComponent = () => {
    return (
      <ChallengeComponent
        challenge={challenge}
        difficulty={difficulty}
        vote={updateVotes}
        myVotes={myVotes}
        favourite={updateFavourites}
        myFavourites={myFavourites}
      />
    );
  };

  return (
    <Layout {...props}>
      <DifficultyChanger setDifficulty={setDifficulty} />
      <br />
      <br />
      <br />
      <Grid columns={1} stackable>
        {!fetching && challenges.length > 0 ? <SelectedComponent /> : <Loading />}
      </Grid>
      <BackButton to="/challenges" />
    </Layout>
  );
};

export default Challenge;
