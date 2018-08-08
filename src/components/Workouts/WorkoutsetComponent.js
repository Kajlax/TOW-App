import React from 'react';
import { Header, Grid, Table, Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class WorkoutsetComponent extends React.Component {
  renderWorkoutSetRow = workoutsets => {
    let { difficulty } = this.props;
    
    if(!difficulty) {
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

    return(
      <Grid.Column>
      <Link to={setUrl}>
      <Header
        as="h3"
        content={workoutset.name}
        subheader={workoutset.submitter}
        dividing
        textAlign="center"
      />
      </Link>
      <Table color="purple" inverted unstackable compact columns={2}>
        <Table.Body>{this.renderWorkoutSetRow(workoutset.challenge)}</Table.Body>
      </Table>
      <i>{workoutset.description}</i>
      <br />
      <br />
      <Grid columns={2} unstackable="true">
        <Grid.Column>
          <Grid.Row>Endurance</Grid.Row>
          <Grid.Row>Strength</Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <Rating
              icon="star"
              defaultRating={workoutset.rating1}
              maxRating={5}
              disabled
            />
          </Grid.Row>
          <Grid.Row>
            <Rating
              icon="star"
              defaultRating={workoutset.rating2}
              maxRating={5}
              disabled
            />
          </Grid.Row>
        </Grid.Column>
      </Grid>
      <br />
      <br />
    </Grid.Column>
    );
  }
}
