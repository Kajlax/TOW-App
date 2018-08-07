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

  decreaseReps = index => {
    this.setState(prevState => {
      const randomReps = prevState.randomReps.slice();
      randomReps[index] = randomReps[index] - 1;
      return { randomReps };
    });
  };

  increaseReps = index => {
    this.setState(prevState => {
      const randomReps = prevState.randomReps.slice();
      randomReps[index] = randomReps[index] + 1;
      return { randomReps };
    });
  };

  renderRows = () => {
    return this.props.workouts.map((item, index) => {
      return (
        <Table.Row key={item.name}>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{this.state.randomReps[index]}</Table.Cell>
          <Table.Cell>
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
