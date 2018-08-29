import React from "react";
import { Grid, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "../Layout";
import Loading from "../Loading";
import WorkoutsetComponent from "./WorkoutsetComponent";
import WorkoutsetActions from "../../redux/reducers/workoutsetRedux";
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

class Workout extends React.Component {
  constructor(p) {
    super(p);

    this.state = {
      difficulty: 1
    };
  }

  componentDidMount() {
    const { getWorkoutSets, workoutsets } = this.props;
    if (workoutsets.length === 0) {
      getWorkoutSets();
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

  render() {
    const {
      workoutsets,
      updateVotes,
      myVotes,
      updateFavourites,
      myFavourites,
      fetching
    } = this.props;
    const { difficulty } = this.state;
    const id = parseInt(this.props.match.params.id, 10);

    const set = workoutsets.filter(c => c.id === id);

    return (
      <Layout {...this.props}>
        <Button.Group widths="4" size="small">
          {this.renderDifficulties()}
        </Button.Group>
        <br />
        <br />
        <br />
        <Grid columns={1} stackable>
          {set.length > 0 && !fetching ? (
            <WorkoutsetComponent
              workoutset={set[0]}
              difficulty={difficulty}
              vote={updateVotes}
              myVotes={myVotes}
              favourite={updateFavourites}
              myFavourites={myFavourites}
            />
          ) : (
            <Loading />
          )}
        </Grid>
        <Link to="/workouts">
          <Icon name="angle double left" circular inverted size="large" />
        </Link>
        <br />
        <br />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  workoutsets: state.workoutset.workoutsets,
  fetching: state.workoutset.fetching,
  error: state.workoutset.error,
  myVotes: state.vote.myVotes,
  myFavourites: state.favourite.workouts
});

const mapDispatchToProps = dispatch => ({
  getWorkoutSets: () => dispatch(WorkoutsetActions.fetchWorkoutsets()),
  updateVotes: (id, mode) => dispatch(VoteActions.updateVotes(id, mode)),
  updateFavourites: (id, defaultRating) => dispatch(FavouriteActions.updateWorkouts(id, defaultRating))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workout);
