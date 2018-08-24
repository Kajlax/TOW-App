import React from "react";
import {
  Grid,
  Table,
  Header,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class WorkoutCompnent extends React.PureComponent {
  renderChallengeRow = workouts => {
    let { reps } = this.props.workout;
    reps = reps.split(',');

    return workouts.map((item, i) => {
      return (
        <Table.Row key={item.id}>
          <Table.Cell width={9}>{item.name}</Table.Cell>
          <Table.Cell width={7}>{reps[i]}</Table.Cell>
        </Table.Row>
      );
    });
  };

  render() {
    const { name, workouts } = this.props.workout;
    const url = `/savedworkout/${name}`;

    return (
      <Grid.Column>
        <Segment color="olive" inverted>
          <Link to={url}>
            <Header
              as="h2"
              to={url}
              content={name}
              textAlign="center"
            />
          </Link>
          <Table color="olive" unstackable compact columns={2}>
            <Table.Body>
              {this.renderChallengeRow(workouts)}
            </Table.Body>
          </Table>
          <br />
          <br />
        </Segment>
        <br />
      </Grid.Column>
    );
  }
}