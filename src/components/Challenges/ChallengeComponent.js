import React from "react";
import { Container, Grid, Header, Label, Segment, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { checkIfIdExists } from "../../util";
import { HeartIcon } from "../Common/HeartIcon";

const ChallengeComponent = props => {
  const { id, name, submitter, challenge, description } = props.challenge;
  const { favourite, myFavourites } = props;

  let { difficulty } = props;
  const challengeRoute = `/challenges/${id}`;
  const isFavorite = checkIfIdExists(myFavourites, id);

  const renderChallengeRow = challenges => {
    if (!difficulty) {
      difficulty = 1;
    }

    return challenges.map(item => {
      let calculatedReps = item.reps * difficulty;
      calculatedReps = Math.floor(calculatedReps);
      calculatedReps = calculatedReps < 1 ? 1 : calculatedReps;

      return (
        <Table.Row key={item.id}>
          <Table.Cell width={9}>{item.name}</Table.Cell>
          <Table.Cell width={7}>{calculatedReps}</Table.Cell>
        </Table.Row>
      );
    });
  };

  const handleFavourite = () => {
    favourite(id, isFavorite ? 1 : 0);
  };

  return (
    <Grid.Column>
      <Segment color="pink">
        <Link to={challengeRoute}>
          <Header as="h2" to={challengeRoute} content={name} subheader={submitter} textAlign="center" />
        </Link>
        <Table color="pink" inverted unstackable compact columns={2}>
          <Table.Body>{renderChallengeRow(challenge)}</Table.Body>
        </Table>
        {description}
        <br />
        <br />
        <br />
        <Container textAlign="center">
          <Label attached="bottom">
            <HeartIcon onClick={handleFavourite} isFavourite={isFavorite} />
          </Label>
        </Container>
      </Segment>
      <br />
    </Grid.Column>
  );
};

export default ChallengeComponent;
