import React from "react";
import { Button, Table } from "semantic-ui-react";

class GeneratedWorkout extends React.PureComponent {
  renderRows = () => {
    return this.props.workouts.map(item => {
      return (
        <Table.Row key={item.name}>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{item.reps}</Table.Cell>
          <Table.Cell>
            <Button.Group compact size="mini">
              <Button icon="minus" />
              <Button icon="plus" />
            </Button.Group>
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  render() {
    return (
      <div>
        <Table color="pink" unstackable selectable striped celled fixed compact>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Exercise</Table.HeaderCell>
              <Table.HeaderCell>Reps</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderRows()}</Table.Body>
        </Table>
      </div>
    );
  }
}

export default GeneratedWorkout;
