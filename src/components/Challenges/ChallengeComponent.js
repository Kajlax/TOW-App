import React from "react";
import { Grid, Table, Header, Segment, Icon, Container, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class ChallengeCompnent extends React.PureComponent {
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

  render() {
    const { challenge, upVote } = this.props;
    const challengeRoute = `/challenges/${challenge.id}`;

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
          </Link><br />
          <Container textAlign='center'>
          <Label color='teal'>
            <Icon color='black' onClick={() => upVote(challenge.id)} name='arrow up' />
            <Icon name='arrow down' />
            {challenge.score}
          </Label>
          </Container>
          <Table color="pink" inverted unstackable compact columns={2}>
            <Table.Body>
              {this.renderChallengeRow(challenge.challenge)}
            </Table.Body>
          </Table>
          {challenge.description}
          <br />
          <br />
        </Segment>
      </Grid.Column>
    );
  }
}
