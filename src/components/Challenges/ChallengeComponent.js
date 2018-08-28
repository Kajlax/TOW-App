import React from "react";
import {
  Container,
  Grid,
  Header,
  Icon,
  Label,
  Rating,
  Segment,
  Table
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const heartStyle = {
  marginRight: "30px"
};

const checkVoteStatus = (myVotes, cId) => {
  return myVotes.find(id => id === cId);
};

const checkFavouriteStatus = (myFavourites, cId) => {
  return myFavourites.find(id => id === cId);
};

export default class ChallengeCompnent extends React.PureComponent {
  handleVote = () => {
    const { vote, challenge, myVotes } = this.props;
    const idFound = checkVoteStatus(myVotes, challenge.id);
    vote(challenge.id, idFound ? "down" : "up");
  };

  handleFavourite = () => {
    const { favourite, challenge, myFavourites } = this.props;
    const idFound = checkFavouriteStatus(myFavourites, challenge.id);
    favourite(challenge.id, idFound ? 1 : 0);
  };

  renderChallengeRow = challenges => {
    let { difficulty } = this.props;

    if (!difficulty) {
      difficulty = 1;
    }

    return challenges.map(item => {
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
    const { challenge, myFavourites } = this.props;
    const idFound = checkFavouriteStatus(myFavourites, challenge.id);
    let returnable = null;

    if (idFound) {
      returnable = [
        <Rating
          key={1}
          icon="heart"
          defaultRating={1}
          maxRating={1}
          size="large"
          style={heartStyle}
          onClick={this.handleFavourite}
        />
      ];
    } else {
      returnable = [
        <Rating
          key={2}
          icon="heart"
          defaultRating={0}
          maxRating={1}
          size="large"
          style={heartStyle}
          onClick={this.handleFavourite}
        />
      ];
    }

    return returnable;
  };

  renderVoteIcons = () => {
    const { challenge, myVotes } = this.props;

    const idFound = checkVoteStatus(myVotes, challenge.id);
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
    const { challenge } = this.props;
    const challengeRoute = `/challenges/${challenge.id}`;
    let score = challenge.score;

    return (
      <Grid.Column>
        <Segment color="pink">
          <Link to={challengeRoute}>
            <Header
              as="h2"
              to={challengeRoute}
              content={challenge.name}
              subheader={challenge.submitter}
              textAlign="center"
            />
          </Link>
          <Table color="pink" inverted unstackable compact columns={2}>
            <Table.Body>
              {this.renderChallengeRow(challenge.challenge)}
            </Table.Body>
          </Table>
          {challenge.description}
          <br />
          <br />
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
