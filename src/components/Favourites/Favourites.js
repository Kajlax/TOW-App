import React from "react";
import Layout from "../Layout";
import Filters from "./FavouriteFilters";
import { Grid } from "semantic-ui-react";

export default class Favourites extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Filters />
        <br />
        <Grid columns={3} stackable />
      </Layout>
    );
  }
}
