import React from "react";
import {
  Grid,
  Table,
  Header,
  Segment,
  Icon,
  Container,
  Label
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const checkVoteStatus = (myVotes, cId) => {
  return myVotes.find(id => id === cId);
};

export default class ChallengeCompnent extends React.PureComponent {
  handleVote = () => {
    const { vote, challenge, myVotes } = this.props;
    const idFound = checkVoteStatus(myVotes, challenge.id);

    vote(challenge.id, idFound ? "down" : "up");
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
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{calculatedReps}</Table.Cell>
        </Table.Row>
      );
    });
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
          <Container textAlign="center">
            <Label attached="bottom">
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
