import React from "react";
import { Table } from "semantic-ui-react";
import JSONdata from "../data/TableData.json";

class GeneratedWorkout extends React.PureComponent {
  renderRows = () => {
    return JSONdata.map(item => {
      return (
        <Table.Row key={item.name}>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{item.reps}</Table.Cell>
        </Table.Row>
      );
    });
  };

  render() {
    return (
      <div>
        <Table
          color="pink"
          unstackable
          selectable
          striped
          celled
          fixed
          compact="very"
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Exercise</Table.HeaderCell>
              <Table.HeaderCell>Reps</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderRows()}</Table.Body>
        </Table>
      </div>
    );
  }
}

export default GeneratedWorkout;
