import React from "react";
import { Button, Container, Header, Label, Rating, Segment, Table } from "semantic-ui-react";

const GeneratedWorkout = ({ workouts, reps, updateRep, saveWorkout, saving, workoutname }) => {
  const decreaseReps = index => {
    const value = reps[index] - 1;
    updateRep(index, value);
  };

  const increaseReps = index => {
    const value = reps[index] + 1;
    updateRep(index, value);
  };

  const renderSaveButton = () => {
    const workoutIds = workouts.map(workout => workout.id);

    if (saving || workoutname) {
      return <Rating icon="heart" defaultRating={1} maxRating={1} size="large" />;
    }

    return <Rating icon="heart" defaultRating={0} maxRating={1} size="large" onClick={() => saveWorkout({ workouts: workoutIds, reps })} />;
  };

  const renderRows = () => {
    return workouts.map((item, index) => {
      return (
        <Table.Row key={item.name}>
          <Table.Cell width={9}>{item.name}</Table.Cell>
          <Table.Cell width={3} textAlign="center">
            {reps[index]}
          </Table.Cell>
          <Table.Cell width={4} textAlign="center">
            <Button.Group compact size="mini">
              <Button onClick={() => decreaseReps(index)} icon="minus" />;
              <Button onClick={() => increaseReps(index)} icon="plus" />;
            </Button.Group>
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  return (
    <Segment color="teal">
      <Header as="h2" content="The workout" textAlign="center" />
      <Table basic="very" unstackable selectable celled fixed compact>
        <Table.Body>{renderRows()}</Table.Body>
      </Table>
      <br /> <br />
      <Container textAlign="center">
        <Label attached="bottom">{renderSaveButton()}</Label>
      </Container>
    </Segment>
  );
};

export default GeneratedWorkout;
