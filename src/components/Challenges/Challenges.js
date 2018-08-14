import React from "react";
import { connectContext } from "react-connect-context";
import { Context } from "../../context";
import Layout from "../Layout";
import { Input, Grid } from "semantic-ui-react";
import ChallengeComponent from "./ChallengeComponent";
import Loading from '../Loading';

class Challenges extends React.PureComponent {
  componentDidMount() {
    this.props.getChallenges();
  }

  handleTextChange = e => {
    const { value } = e.target;
    this.props.updateSearchQuery(value);
  };

  renderChallenges = () => {
    let { searchQuery, challenges, updateVotes, myVotes } = this.props;
    searchQuery = searchQuery.toUpperCase();

    if (searchQuery !== "") {
      challenges = this.props.challenges.filter(singlechallenge => {
        const upperCaseName = singlechallenge.name.toUpperCase();

        if (upperCaseName.indexOf(searchQuery) > -1) {
          return singlechallenge;
        }
        return null;
      });
    }

    return challenges.map(item => {
      return <ChallengeComponent
              challenge={item}
              key={item.id}
              vote={updateVotes}
              myVotes={myVotes}
            />;
    });
  };

  render() {
    const { searchQuery, challenges } = this.props;
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
        <br />
        <Grid columns={3} stackable>
          {
            challenges.length > 0 ? 
            this.renderChallenges():
            <Loading />
          }
        </Grid>
        <br />
      </Layout>
    );
  }
}

export default connectContext(Context)(Challenges);
