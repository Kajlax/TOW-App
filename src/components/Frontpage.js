import React from "react";
import Layout from "./Layout";
import Filters from "./Filters";
import GeneratedWorkout from "./GeneratedWorkout";
import { Button } from "semantic-ui-react";

export default class Frontpage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      hideFilters: false,
      filterIcon: "caret up"
    };
  }

  toggleFilters() {
    this.setState({
      hideFilters: !this.state.hideFilters
    });
    this.state.filterIcon === "caret up"
      ? this.setState({ filterIcon: "caret down" })
      : this.setState({ filterIcon: "caret up" });
  }

  render() {
    return (
      <Layout {...this.props}>
        <Button
          content="Filters"
          icon={this.state.filterIcon}
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
