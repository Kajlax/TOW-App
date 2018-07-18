import React from "react";
import Layout from "./Layout";
import Filters from "./Filters";
import GeneratedWorkout from "./GeneratedWorkout";
import { Button } from "semantic-ui-react";

export default class Frontpage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      hideFilters: false
    };
  }

  toggleFilters() {
    this.setState({
      hideFilters: !this.state.hideFilters
    });
  }

  render() {
    return (
      <Layout {...this.props}>
        <Button
          content="Filters"
          icon="caret down"
          labelPosition="right"
          color="teal"
          size="small"
          onClick={this.toggleFilters.bind(this)}
        />
        <Button content="Generate" color="pink" size="small" />
        <br />
        {!this.state.hideFilters && <Child />}
        <br />
        <GeneratedWorkout />
      </Layout>
    );
  }
}

const Child = () => <Filters />;
