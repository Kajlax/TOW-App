import React from "react";
import { Button, Table } from "semantic-ui-react";

class GeneratedWorkout extends React.PureComponent {
  decreaseReps = (index) => {
    const { updateRep, reps } = this.props;
    const value = reps[index] - 1;
    updateRep(index, value);
  };

  increaseReps = (index) => {
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
          <Table.Cell textAlign="center">
            {reps[index]}
          </Table.Cell>
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

  render() {
    return (
      <React.Fragment>
        <Table basic="very" unstackable selectable celled fixed compact>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell width={9}>Exercise</Table.HeaderCell>
              <Table.HeaderCell width={3}>Reps</Table.HeaderCell>
              <Table.HeaderCell width={4}>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderRows()}</Table.Body>
        </Table>
        <br /> <br />
      </React.Fragment>
    );
  }
}

export default GeneratedWorkout;
