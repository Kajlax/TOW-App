import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import ChallengeComponent from "./ChallengeComponent";
import Layout from "../Layout";
import Loading from "../Loading";
import ChallengeActions from "../../redux/reducers/challengeRedux";
import VoteActions from "../../redux/reducers/voteRedux";
import FavouriteActions from "../../redux/reducers/favouriteRedux";
import { DifficultyChanger, BackButton } from "../Common";

class Challenge extends React.Component {
  constructor(p) {
    super(p);

    this.state = {
      difficulty: 1,
    };
  }

  componentDidMount() {
    const { challenges, getChallenges } = this.props;
    if (challenges.length === 0) {
      getChallenges();
    }
  }

  selectDifficulty = value => {
    this.setState({
      difficulty: value,
    });
  };

  renderComponent = () => {
    const { challenges, updateVotes, myVotes, updateFavourites, myFavourites } = this.props;
    const { difficulty } = this.state;

    const id = parseInt(this.props.match.params.id, 10);
    const challenge = challenges.find(c => c.id === id);

    return (
      <ChallengeComponent
        challenge={challenge}
        difficulty={difficulty}
        vote={updateVotes}
        myVotes={myVotes}
        favourite={updateFavourites}
        myFavourites={myFavourites}
      />
    );
  };

  render() {
    const { fetching, challenges } = this.props;
    return (
      <Layout {...this.props}>
        <DifficultyChanger setDifficulty={this.selectDifficulty} />
        <br />
        <br />
        <br />
        <Grid columns={1} stackable>
          {!fetching && challenges.length > 0 ? this.renderComponent() : <Loading />}
        </Grid>
        <BackButton to="/challenges" />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  challenges: state.challenge.challenges,
  fetching: state.challenge.fetching,
  error: state.challenge.error,
  myVotes: state.vote.myVotes,
  myFavourites: state.favourite.challenges,
});

const mapDispatchToProps = dispatch => ({
  getChallenges: () => dispatch(ChallengeActions.fetchChallenges()),
  updateVotes: (id, mode) => dispatch(VoteActions.updateVotes(id, mode)),
  updateFavourites: (id, defaultRating) => dispatch(FavouriteActions.updateChallenges(id, defaultRating)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenge);
