import React from "react";
import { Grid, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ChallengeComponent from "./ChallengeComponent";
import Layout from "../Layout";
import Loading from "../Loading";
import ChallengeActions from "../../redux/reducers/challengeRedux";
import VoteActions from "../../redux/reducers/voteRedux";
import FavouriteActions from "../../redux/reducers/favouriteRedux";

const difficulties = [
  {
    color: "green",
    text: "25 %",
    multiplier: 0.25
  },
  {
    color: "yellow",
    text: "50 %",
    multiplier: 0.5
  },
  {
    color: "orange",
    text: "75 %",
    multiplier: 0.75
  },
  {
    color: "red",
    text: "100 %",
    multiplier: 1
  }
];

class Challenge extends React.Component {
  constructor(p) {
    super(p);

    this.state = {
      difficulty: 1
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
      difficulty: value
    });
  };

  renderDifficulties = () => {
    return difficulties.map(d => {
      return (
        <Button
          onClick={() => this.selectDifficulty(d.multiplier)}
          content={d.text}
          color={d.color}
          key={d.text}
        />
      );
    });
  };

  renderComponent = () => {
    const {
      challenges,
      updateVotes,
      myVotes,
      updateFavourites,
      myFavourites
    } = this.props;
    const { difficulty } = this.state;

    const id = parseInt(this.props.match.params.id, 10);
    const challenge = challenges.filter(c => c.id === id);

    return (
      <ChallengeComponent
        challenge={challenge[0]}
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
        <Button.Group widths="4" size="small">
          {this.renderDifficulties()}
        </Button.Group>
        <br />
        <br />
        <br />
        <Grid columns={1} stackable>
          {!fetching && challenges.length > 0 ? (
            this.renderComponent()
          ) : (
            <Loading />
          )}
        </Grid>
        <Link to="/challenges">
          <Icon name="angle double left" circular inverted size="large" />
        </Link>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  challenges: state.challenge.challenges,
  fetching: state.challenge.fetching,
  error: state.challenge.error,
  myVotes: state.vote.myVotes,
  myFavourites: state.favourite.myFavourites
});

const mapDispatchToProps = dispatch => ({
  getChallenges: () => dispatch(ChallengeActions.fetchChallenges()),
  updateVotes: (id, mode) => dispatch(VoteActions.updateVotes(id, mode)),
  updateFavourites: (id, defaultRating) =>
    dispatch(FavouriteActions.updateFavourites(id, defaultRating))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenge);
