import React from "react";
import { Button, Segment, Table } from "semantic-ui-react";
import { Link } from 'react-router-dom';

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
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell textAlign="center">{reps[index]}</Table.Cell>
          <Table.Cell textAlign="center">
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
      return <Button loading icon="save outline" content="Save Workout" /> 
    }
    if (workoutname) {
      const route = `/savedworkout/${workoutname}`
      return <Link to={route}><Button icon="check" content="Go to workout" /></Link>
    }

    return <Button onClick={() => saveWorkout({ workouts, reps })} icon="save outline" content="Save Workout" />                  
  }

  render() {
    return (
      <Segment color="teal">
        <Table basic="very" unstackable selectable celled fixed compact>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell width={9}>Exercise</Table.HeaderCell>
              <Table.HeaderCell width={3}>Reps</Table.HeaderCell>
              <Table.HeaderCell width={4}>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderRows()}</Table.Body>
          <Table.Footer>
            <Table.Row textAlign="center">
              <Table.Cell width={16}>
                {
                  this.renderSaveButton()
                }
              </Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
    );
  }
}

export default GeneratedWorkout;
