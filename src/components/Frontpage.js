import React, { Component } from "react";
import Layout from "./Layout";
import Filters from "./Filters";
import GeneratedWorkout from "./GeneratedWorkout";
import { Button } from "semantic-ui-react";

export default class Frontpage extends Component {
  constructor() {
    super();
    this.state = {
      showFilters: true
    };
  }

  toggleFilters() {
    this.setState({
      showFilters: !this.state.showFilters
    });
  }

  render() {
    return (
      <Layout {...this.props}>
        <Button
          content="Filters"
          icon="filter"
          labelPosition="right"
          color="teal"
          size="small"
          onClick={this.toggleFilters.bind(this)}
        />
        {!this.state.showFilters && <Child />}
        <br />
        <br />
        <GeneratedWorkout />
      </Layout>
    );
  }
}

const Child = () => <Filters />;
