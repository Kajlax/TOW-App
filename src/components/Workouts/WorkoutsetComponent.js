import React from "react";
import {
  Container,
  Grid,
  Header,
  Icon,
  Label,
  Segment,
  Table,
  Progress
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const checkVoteStatus = (myVotes, cId) => {
  return myVotes.find(id => id === cId);
};

export default class WorkoutsetComponent extends React.Component {
  handleVote = () => {
    const { vote, workoutset, myVotes } = this.props;
    const idFound = checkVoteStatus(myVotes, workoutset.id);

    vote(workoutset.id, idFound ? "down" : "up");
  };

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

  renderVoteIcons = () => {
    const { workoutset, myVotes } = this.props;

    const idFound = checkVoteStatus(myVotes, workoutset.id);
    let returnable = null;
    if (idFound) {
      returnable = [
        <Icon key={1} color="black" disabled name="arrow up" />,
        <Icon
          key={2}
          color="black"
          onClick={this.handleVote}
          name="arrow down"
        />
      ];
    } else {
      returnable = [
        <Icon
          key={1}
          color="black"
          onClick={this.handleVote}
          name="arrow up"
        />,
        <Icon key={2} color="black" disabled name="arrow down" />
      ];
    }

    return returnable;
  };

  render() {
    const { workoutset } = this.props;
    const setUrl = `/workouts/${workoutset.id}`;
    let score = workoutset.score;

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
          <br />
          <Container textAlign="center">
            <Label attached="bottom">
              {this.renderVoteIcons()}
              {score}
            </Label>
          </Container>
        </Segment>
      </Grid.Column>
    );
  }
}
