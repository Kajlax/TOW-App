import React, { useState, useEffect } from "react";
import { Button, Grid } from "semantic-ui-react";
import { CSSTransitionGroup } from "react-transition-group";
import Layout from "../Layout";
import Filters from "./WorkoutFilters";
import WorkoutsetComponent from "./WorkoutsetComponent";
import Loading from "../Loading";
import "../Animations.css";
import useWorkoutState from "./useWorkoutState";

const initialFilters = [
  {
    title: "Calisthenics",
    selected: false,
  },
  {
    title: "Gym",
    selected: false,
  },
  {
    title: "Mixed",
    selected: false,
  },
  {
    title: "Upper body",
    selected: false,
  },
  {
    title: "Lower body",
    selected: false,
  },
  {
    title: "Full body",
    selected: false,
  },
  {
    title: "Core",
    selected: false,
  },
];

const activeFilters = fs => {
  // find selected filters and show only title
  return fs.filter(filter => filter.selected).map(filter => filter.title);
};

const Workouts = props => {
  const [hideFilters, setHideFilters] = useState(true);
  const [filters, setFilters] = useState(initialFilters);
  const getFilterIcon = () => (hideFilters ? "caret down" : "caret up");

  const [reduxState, reduxActions] = useWorkoutState();
  let { workoutsets } = reduxState;
  const { fetching, myVotes, myFavourites } = reduxState;
  const { getWorkoutSets, updateVotes, updateFavourites } = reduxActions;

  const toggleFilter = index => {
    const newState = filters.map((f, i) => {
      const filter = f;
      if (i === index) {
        filter.selected = !filter.selected;
      }
      return filter;
    });
    setFilters(newState);
  };

  useEffect(() => {
    if (workoutsets.length === 0) {
      getWorkoutSets();
    }
  }, [getWorkoutSets, workoutsets]);

  const renderWorkoutSets = () => {
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

  return (
    <Layout {...props}>
      <Button content="Filters" icon={getFilterIcon()} labelPosition="right" color="teal" size="small" onClick={() => setHideFilters(!hideFilters)} />
      <br />
      <CSSTransitionGroup transitionName="example" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
        {!hideFilters ? <Filters filters={filters} toggleFilter={toggleFilter} /> : null}
      </CSSTransitionGroup>
      <br />
      <br />
      <Grid columns={3} stackable>
        {!fetching ? renderWorkoutSets() : <Loading />}
      </Grid>
      <br />
    </Layout>
  );
};

export default Workouts;
