import React, { useEffect, useState } from "react";
import { Grid, Header, Input, Segment } from "semantic-ui-react";
import ChallengeComponent from "./ChallengeComponent";
import Loading from "../Loading";
import Layout from "../Layout";
import useChallengeState from "./useChallengeState";

const Challenges = props => {
  const [reduxState, reduxActions] = useChallengeState();
  const { challenges, fetching, myVotes, myFavourites } = reduxState;
  const { updateVotes, updateFavourites, getChallenges } = reduxActions;

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (challenges.length === 0) {
      getChallenges();
    }
  }, [getChallenges, challenges]);

  const ChallengesList = () => {
    const searchQueryText = searchQuery.toUpperCase();
    let filteredChallenges = challenges;
    if (searchQuery !== "") {
      filteredChallenges = challenges.filter(singlechallenge => {
        const upperCaseName = singlechallenge.name.toUpperCase();

        if (upperCaseName.indexOf(searchQueryText) > -1) {
          return singlechallenge;
        }
        return null;
      });
    }

    if (filteredChallenges.length === 0) {
      return (
        <Segment basic>
          <Grid.Column>
            <Header as="h3" content="No matching results found." />
          </Grid.Column>
        </Segment>
      );
    }

    return filteredChallenges.map(item => {
      return (
        <ChallengeComponent
          challenge={item}
          key={item.id}
          vote={updateVotes}
          myVotes={myVotes}
          favourite={updateFavourites}
          myFavourites={myFavourites}
        />
      );
    });
  };

  return (
    <Layout {...props}>
      <Input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} size="small" icon="search" placeholder="Search challenges..." fluid />
      <br />
      <br />
      <Grid columns={3} stackable>
        {!fetching ? <ChallengesList /> : <Loading />}
      </Grid>
      <br />
    </Layout>
  );
};

export default Challenges;
