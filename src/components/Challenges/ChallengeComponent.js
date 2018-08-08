import React from 'react';
import { Grid, Table, Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class ChallengeCompnent extends React.PureComponent {

  renderChallengeRow = challenges => {
    return challenges.map(item => {
      return (
        <Table.Row key={item.id}>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{item.reps}</Table.Cell>
        </Table.Row>
      );
    });
  };

  render() {
    const { challenge } = this.props;
    const challengeRoute = `/challenges/${challenge.id}`
    return(
      <Grid.Column>
        <Link to={challengeRoute}>
        <Header
          as="h3"
          to={challengeRoute}
          content={challenge.name}
          subheader={challenge.submitter}
          dividing
          textAlign="center"
        />
        </Link>
        <Table color="pink" inverted unstackable compact>
          <Table.Body>{this.renderChallengeRow(challenge.challenge)}</Table.Body>
        </Table>
        <i>{challenge.description}</i>
      </Grid.Column>

    );
  }
}

