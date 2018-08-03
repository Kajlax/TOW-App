import React from "react";
import { connectContext } from "react-connect-context";
import { Context } from "../../context";
import Layout from "../Layout";
import { Header, Input, Grid, Table } from "semantic-ui-react";

class Challenges extends React.PureComponent {
  componentDidMount() {
    this.props.getChallenges();
  }

  handleTextChange = e => {
    const { value } = e.target;
    this.props.updateSearchQuery(value);
  };

  renderChallenges = () => {
    let { searchQuery } = this.props;
    searchQuery = searchQuery.toUpperCase();

    if (searchQuery !== "") {
      this.props.challenges = this.props.challenges.filter(Header => {
        const upperCaseName = Header.content.toUpperCase();

        if (upperCaseName.indexOf(searchQuery) > -1) {
          return Header;
        }
        return null;
      });
    } else {
    }
    return this.props.challenges.map(item => {
      return (
        <Grid.Column key={item.id}>
          <Header
            as="h3"
            content={item.name}
            subheader={item.submitter}
            dividing
            textAlign="center"
          />
          <Table color="pink" inverted unstackable>
            <Table.Body>{this.renderChallengeRow(item.challenge)}</Table.Body>
          </Table>
        </Grid.Column>
      );
    });
  };

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
    const { searchQuery } = this.props;
    return (
      <Layout {...this.props}>
        <Input
          value={searchQuery}
          onChange={this.handleTextChange}
          size="small"
          icon="search"
          placeholder="Search challenges..."
          fluid
        />
        <br />
        <Grid columns={3} divided stackable>
          {this.renderChallenges()}
        </Grid>
      </Layout>
    );
  }
}

export default connectContext(Context)(Challenges);
