import React from "react";
import { connect } from "react-redux";
import { Grid, Header, Input, Segment } from "semantic-ui-react";
import ChallengeComponent from "./ChallengeComponent";
import Loading from "../Loading";
import Layout from "../Layout";
import SearchActions from "../../redux/reducers/searchRedux";
import ChallengeActions from "../../redux/reducers/challengeRedux";
import VoteActions from "../../redux/reducers/voteRedux";
import FavouriteActions from "../../redux/reducers/favouriteChallengeRedux";

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
    let {
      searchQuery,
      challenges,
      updateVotes,
      myVotes,
      updateFavourites,
      myFavourites
    } = this.props;
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

    if (challenges.length === 0) {
      return (
        <Segment basic>
          <Grid.Column>
            <Header as="h3" content="No matching results found." />
          </Grid.Column>
        </Segment>
      );
    }

    return challenges.map(item => {
      return (
        <ChallengeComponent
          challenge={item}
          key={item.id}
          vote={updateVotes}
          myVotes={myVotes}
          favourite={updateFavourites}
          myFavourites={myFavourites}
        />
      );
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

const mapStateToProps = state => ({
  searchQuery: state.search.searchQuery,
  challenges: state.challenge.challenges,
  fetching: state.challenge.fetching,
  error: state.challenge.error,
  myVotes: state.vote.myVotes,
  myFavourites: state.favourite.myFavourites
});

const mapDispatchToProps = dispatch => ({
  updateSearchQuery: query => dispatch(SearchActions.updateQuery(query)),
  getChallenges: () => dispatch(ChallengeActions.fetchChallenges()),
  updateVotes: (id, mode) => dispatch(VoteActions.updateVotes(id, mode)),
  updateFavourites: (id, defaultRating) =>
    dispatch(FavouriteActions.updateFavourites(id, defaultRating))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenges);
