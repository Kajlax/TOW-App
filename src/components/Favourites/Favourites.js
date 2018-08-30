import React from "react";
import { connect } from "react-redux";
import Layout from "../Layout";
import Filters from "./FavouriteFilters";

class Favourites extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Filters
          saved={this.props.saved}
          challenges={this.props.challenges}
          workouts={this.props.workouts}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  workouts: state.favourite.workouts,
  challenges: state.favourite.challenges,
  saved: state.favourite.saved
});

export default connect(mapStateToProps)(Favourites);
