import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout";
import Filters from "./FavouriteFilters";

const Favourites = props => {
  const saved = useSelector(state => state.favourite.saved);
  const challenges = useSelector(state => state.favourite.challenges);
  const workouts = useSelector(state => state.favourite.workouts);

  return (
    <Layout {...props}>
      <Filters saved={saved} challenges={challenges} workouts={workouts} />
    </Layout>
  );
};

export default Favourites;
