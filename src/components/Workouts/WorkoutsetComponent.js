import React from "react";
import {
  Container,
  Grid,
  Header,
  Icon,
  Label,
  Rating,
  Segment,
  Table,
  Progress
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const heartStyle = {
  marginRight: "30px"
};

const checkVoteStatus = (myVotes, cId) => {
  return myVotes.find(id => id === cId);
};

const checkFavouriteStatus = (userFavourites, cId) => {
  return userFavourites.find(id => id === cId);
};

export default class WorkoutsetComponent extends React.PureComponent {
  handleVote = () => {
    const { vote, workoutset, myVotes } = this.props;
    const idFound = checkVoteStatus(myVotes, workoutset.id);
    vote(workoutset.id, idFound ? "down" : "up");
  };

  handleFavourite = () => {
    const { favourite, workoutset, userFavourites } = this.props;
    const idFound = checkFavouriteStatus(userFavourites, workoutset.id);
    favourite(workoutset.id, idFound ? 1 : 0);
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
          <Table.Cell width={9}>{item.name}</Table.Cell>
          <Table.Cell width={7}>{calculatedReps}</Table.Cell>
        </Table.Row>
      );
    });
  };

  renderHeartIcon = () => {
    const { workoutset, userFavourites } = this.props;
    const idFound = checkFavouriteStatus(userFavourites, workoutset.id);
    let returnable = null;

    if (idFound) {
      returnable = [
        <Rating
          icon="heart"
          defaultRating={1}
          maxRating={1}
          size="large"
          style={heartStyle}
        />
      ];
    } else {
      returnable = [
        <Rating
          icon="heart"
          defaultRating={0}
          maxRating={1}
          size="large"
          style={heartStyle}
        />
      ];
    }

    return returnable;
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
              {this.renderHeartIcon()}
              {this.renderVoteIcons()}
              {score}
            </Label>
          </Container>
        </Segment>
        <br />
      </Grid.Column>
    );
  }
}
