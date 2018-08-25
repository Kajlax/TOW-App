import React from "react";
import {
  Button,
  Container,
  Header,
  Label,
  Segment,
  Table
} from "semantic-ui-react";
import { Link } from "react-router-dom";

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
        <Button
          loading
          icon="save outline"
          content="Save"
          color="teal"
          size="small"
          compact
        />
      );
    }
    if (workoutname) {
      const route = `/savedworkout/${workoutname}`;
      return (
        <Link to={route}>
          <Button
            content="Go to workout"
            icon="check"
            labelPosition="left"
            color="teal"
            size="small"
            compact
          />
        </Link>
      );
    }

    return (
      <Button
        content="Save"
        color="teal"
        size="small"
        compact
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
        <Container textAlign="right">
          <Label attached="bottom">{this.renderSaveButton()}</Label>
        </Container>
      </Segment>
    );
  }
}

export default GeneratedWorkout;
