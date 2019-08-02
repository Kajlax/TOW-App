import React from "react";
import { Container, Grid, Label, Table, Header, Rating, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { BackButton } from "../Common/";

const WorkoutComponent = props => {
  const { name, workouts, reps } = props.workout;
  const url = `/savedworkout/${name}`;

  const renderChallengeRow = workouts => {
    const repsArray = reps.split(",");

    return workouts.map((item, i) => {
      return (
        <Table.Row key={item.id}>
          <Table.Cell width={9}>{item.name}</Table.Cell>
          <Table.Cell width={7}>{repsArray[i]}</Table.Cell>
        </Table.Row>
      );
    });
  };

  return (
    <Grid.Column>
      <Segment color="teal">
        <Link to={url}>
          <Header as="h2" to={url} content="The workout" textAlign="center" />
        </Link>
        <Table color="teal" inverted unstackable compact columns={2}>
          <Table.Body>{renderChallengeRow(workouts)}</Table.Body>
        </Table>
        <br />
        <Container textAlign="center">
          <Label attached="bottom">
            <Rating key={1} icon="heart" defaultRating={1} maxRating={1} size="large" />
          </Label>
        </Container>
      </Segment>
      <BackButton to="/generate" />
    </Grid.Column>
  );
};

export default WorkoutComponent;
