import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { CSSTransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import Layout from "../Layout";
import Filters from "./WorkoutFilters";
import WorkoutsetComponent from "./WorkoutsetComponent";
import Loading from "../Loading";
import WorkoutsetActions from "../../redux/reducers/workoutsetRedux";
import VoteActions from "../../redux/reducers/voteRedux";
import FavouriteActions from "../../redux/reducers/favouriteRedux";
import "../Animations.css";

const filters = [
  {
    title: "Calisthenics",
    selected: false
  },
  {
    title: "Gym",
    selected: false
  },
  {
    title: "Mixed",
    selected: false
  },
  {
    title: "Upper body",
    selected: false
  },
  {
    title: "Lower body",
    selected: false
  },
  {
    title: "Full body",
    selected: false
  },
  {
    title: "Core",
    selected: false
  }
];

const activeFilters = fs => {
  const af = [];
  fs.forEach(f => {
    if (f.selected) {
      af.push(f.title);
    }
  });
  return af;
};

class Workouts extends React.Component {
  componentDidMount() {
    const { getWorkoutSets, workoutsets } = this.props;
    if (workoutsets.length === 0) {
      getWorkoutSets();
    }
  }
  constructor() {
    super();
    this.state = {
      hideFilters: true,
      filterIcon: "caret down",
      filters
    };
  }

  toggleFilters = () => {
    const { hideFilters, filterIcon } = this.state;
    const icon = filterIcon === "caret up" ? "caret down" : "caret up";

    this.setState({
      hideFilters: !hideFilters,
      filterIcon: icon
    });
  };

  renderWorkoutSets = () => {
    let {
      workoutsets,
      updateVotes,
      myVotes,
      updateFavourites,
      myFavourites
    } = this.props;
    const { filters } = this.state;
    const active = activeFilters(filters);

    if (active.length > 0) {
      workoutsets = workoutsets.filter(workout => {
        const tags = workout.tags;
        let returnWorkout = false;
        active.forEach(a => {
          if (tags && tags.indexOf(a) > -1) {
            returnWorkout = true;
          }
        });

        return returnWorkout;
      });
    }

    return workoutsets.map(item => {
      return (
        <WorkoutsetComponent
          workoutset={item}
          key={item.id}
          vote={updateVotes}
          myVotes={myVotes}
          favourite={updateFavourites}
          myFavourites={myFavourites}
        />
      );
    });
  };

  toggleFilter = index => {
    const { filters } = this.state;
    const newState = filters.map((f, i) => {
      const filter = f;
      if (i === index) {
        filter.selected = !filter.selected;
      }
      return filter;
    });
    this.setState({
      filters: newState
    });
  };

  render() {
    const { hideFilters, filterIcon, filters } = this.state;
    let { fetching } = this.props;
    return (
      <Layout {...this.props}>
        <Button
          content="Filters"
          icon={filterIcon}
          labelPosition="right"
          color="teal"
          size="small"
          onClick={this.toggleFilters}
        />
        <br />
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {!hideFilters ? (
            <Filters filters={filters} toggleFilter={this.toggleFilter} />
          ) : null}
        </CSSTransitionGroup>
        <br />
        <br />
        <Grid columns={3} stackable>
          {!fetching ? this.renderWorkoutSets() : <Loading />}
        </Grid>
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
  myFavourites: state.favourite.myFavourites
});

const mapDispatchToProps = dispatch => ({
  getWorkoutSets: () => dispatch(WorkoutsetActions.fetchWorkoutsets()),
  updateVotes: (id, mode) => dispatch(VoteActions.updateVotes(id, mode)),
  updateFavourites: (id, defaultRating) =>
    dispatch(FavouriteActions.updateFavourites(id, defaultRating))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workouts);
