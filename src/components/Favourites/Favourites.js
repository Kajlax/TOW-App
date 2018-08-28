import React from "react";
import Layout from "../Layout";
import Filters from "./FavouriteFilters";

const filters = [
  {
    title: "Workouts",
    selected: false
  },
  {
    title: "Challenges",
    selected: false
  },
  {
    title: "Saved",
    selected: false
  }
];

export default class Favourites extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      filters
    };
  }
  render() {
    return (
      <Layout {...this.props}>
        <Filters filters={filters} />
        <br />
      </Layout>
    );
  }
}
