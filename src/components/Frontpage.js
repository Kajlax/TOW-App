import React from "react";
import Layout from "./Layout";
import Filters from "./Filters";
import GeneratedWorkout from "./GeneratedWorkout";

export default class Frontpage extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Filters />
        <GeneratedWorkout />
      </Layout>
    );
  }
}
