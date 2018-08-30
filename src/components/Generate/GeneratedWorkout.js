import React from "react";
import {
  Button,
  Container,
  Header,
  Label,
  Rating,
  Segment,
  Table
} from "semantic-ui-react";

class GeneratedWorkout extends React.PureComponent {
  decreaseReps = index => {
    const { updateRep, reps } = this.props;
    const value = reps[index] - 1;
    updateRep(index, value);
  };

  increaseReps = index => {
    const { updateRep, reps } = this.props;
    const value = reps[index] + 1;
    updateRep(index, value);
  };

  renderRows = () => {
    const { workouts, reps } = this.props;

    return workouts.map((item, index) => {
      return (
        <Table.Row key={item.name}>
          <Table.Cell width={9}>{item.name}</Table.Cell>
          <Table.Cell width={3} textAlign="center">
            {reps[index]}
          </Table.Cell>
          <Table.Cell width={4} textAlign="center">
            <Button.Group compact size="mini">
              <Button onClick={() => this.decreaseReps(index)} icon="minus" />;
              <Button onClick={() => this.increaseReps(index)} icon="plus" />;
            </Button.Group>
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  renderSaveButton = () => {
    const { reps, saveWorkout, saving, workoutname } = this.props;
    let { workouts } = this.props;
    workouts = workouts.map(workout => workout.id);

    if (saving) {
      return (
        <Rating
          loading
          icon="heart"
          defaultRating={1}
          maxRating={1}
          size="large"
        />
      );
    }
    if (workoutname) {
      return (
        <Rating icon="heart" defaultRating={1} maxRating={1} size="large" />
      );
    }

    return (
      <Rating
        icon="heart"
        defaultRating={0}
        maxRating={1}
        size="large"
        onClick={() => saveWorkout({ workouts, reps })}
      />
    );
  };

  render() {
    return (
      <Segment color="teal">
        <Header as="h2" content="The workout" textAlign="center" />
        <Table basic="very" unstackable selectable celled fixed compact>
          <Table.Body>{this.renderRows()}</Table.Body>
        </Table>
        <br /> <br />
        <Container textAlign="center">
          <Label attached="bottom">{this.renderSaveButton()}</Label>
        </Container>
      </Segment>
    );
  }
}

export default GeneratedWorkout;
