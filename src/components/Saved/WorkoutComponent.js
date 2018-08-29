import React from "react";
import {
  Container,
  Grid,
  Icon,
  Label,
  Table,
  Header,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class WorkoutCompnent extends React.PureComponent {
  renderChallengeRow = workouts => {
    let { reps } = this.props.workout;
    reps = reps.split(",");

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
        <Segment color="teal">
          <Link to={url}>
            <Header as="h2" to={url} content="The workout" textAlign="center" />
          </Link>
          <Table color="teal" inverted unstackable compact columns={2}>
            <Table.Body>{this.renderChallengeRow(workouts)}</Table.Body>
          </Table>
          <br />
          <Container textAlign="center">
            <Label attached="bottom" />
          </Container>
        </Segment>
        <Link to="/generate">
          <Icon name="angle double left" circular inverted size="large" />
        </Link>
      </Grid.Column>
    );
  }
}
