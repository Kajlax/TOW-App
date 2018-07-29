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
