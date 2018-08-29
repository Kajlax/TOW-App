import React from "react";
import Layout from "../Layout";
import Filters from "./FavouriteFilters";
import { Grid } from "semantic-ui-react";

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
    title: "Generated",
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
        <Grid columns={3} stackable />
      </Layout>
    );
  }
}
