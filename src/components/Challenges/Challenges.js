import React from "react";
import { connect } from 'react-redux'
import { Input, Grid } from "semantic-ui-react";
import ChallengeComponent from "./ChallengeComponent";
import Loading from "../Loading";
import Layout from "../Layout";
import SearchActions from '../../redux/reducers/searchRedux';
import ChallengeActions from '../../redux/reducers/challengeRedux';
import VoteActions from '../../redux/reducers/voteRedux';

class Challenges extends React.PureComponent {
  componentDidMount() {
    const { challenges, getChallenges } = this.props;
    if (challenges.length === 0) {
      getChallenges();      
    }
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
    const { searchQuery, fetching } = this.props;
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
          {!fetching ? this.renderChallenges() : <Loading />}
        </Grid>
        <br />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.search.searchQuery,
  challenges: state.challenge.challenges,
  fetching: state.challenge.fetching,
  error: state.challenge.error,
  myVotes: state.vote.myVotes,
});

const mapDispatchToProps = (dispatch) => ({
  updateSearchQuery: (query) => dispatch(SearchActions.updateQuery(query)),
  getChallenges: () => dispatch(ChallengeActions.fetchChallenges()),
  updateVotes: (id, mode) => dispatch(VoteActions.updateVotes(id, mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Challenges);
