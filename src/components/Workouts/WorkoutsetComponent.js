import React from "react";
import { Header, Grid, Segment, Table, Progress } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class WorkoutsetComponent extends React.Component {
  renderWorkoutSetRow = workoutsets => {
    let { difficulty } = this.props;

    if (!difficulty) {
      difficulty = 1;
    }

    return workoutsets.map(item => {
      let calculatedReps = item.reps * difficulty;
      calculatedReps = Math.floor(calculatedReps);

      return (
        <Table.Row key={item.id}>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{calculatedReps}</Table.Cell>
        </Table.Row>
      );
    });
  };

  render() {
    const { workoutset } = this.props;
    const setUrl = `/workouts/${workoutset.id}`;

    return (
      <Grid.Column>
        <Segment color="purple">
          <Link to={setUrl}>
            <Header
              as="h2"
              content={workoutset.name}
              subheader={workoutset.submitter}
              textAlign="center"
            />
          </Link>
          <Table color="purple" inverted unstackable compact columns={2}>
            <Table.Body>
              {this.renderWorkoutSetRow(workoutset.challenge)}
            </Table.Body>
          </Table>
          {workoutset.description}
          <br />
          <br />
          <Progress
            value={workoutset.rating1}
            total="5"
            label="Endurance"
            progress="ratio"
            color="orange"
          />
          <Progress
            value={workoutset.rating2}
            total="5"
            label="Strength"
            progress="ratio"
            color="yellow"
          />
        </Segment>
      </Grid.Column>
    );
  }
}
