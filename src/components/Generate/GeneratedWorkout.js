import React from "react";
import { Button, Table } from "semantic-ui-react";

class GeneratedWorkout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      randomReps: Array(this.props.workouts.length)
        .fill()
        .map(() => Math.floor(Math.random() * 11) + 5)
    };
  }

  renderReps = () => {
    return this.state.randomReps[
      Math.floor(Math.random() * this.state.randomReps.length)
    ];
  };

  renderDecreaseButton = () => {
    return <Button onClick={() => this.decreaseReps()} icon="minus" />;
  };

  renderIncreaseButton = () => {
    return <Button onClick={() => this.increaseReps()} icon="plus" />;
  };

  decreaseReps = () => console.log("decrease");
  increaseReps = () => console.log("increase");

  renderRows = () => {
    return this.props.workouts.map(item => {
      return (
        <Table.Row key={item.name}>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{this.renderReps()}</Table.Cell>
          <Table.Cell>
            <Button.Group compact size="mini">
              {this.renderDecreaseButton()}
              {this.renderIncreaseButton()}
            </Button.Group>
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  render() {
    return (
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
    );
  }
}

export default GeneratedWorkout;
