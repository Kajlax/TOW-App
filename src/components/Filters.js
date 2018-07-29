import React, { Component } from "react";
import { Button, Dropdown } from "semantic-ui-react";

const numberOfExercises = [
  { key: "3", text: "3", value: "3" },
  { key: "4", text: "4", value: "4" },
  { key: "5", text: "5", value: "5" },
  { key: "6", text: "6", value: "6" },
  { key: "7", text: "7", value: "7" },
  { key: "8", text: "8", value: "8" }
];

export default class Filters extends Component {
  state = {
    filterTags: ""
  };

  render() {
    return (
      <div>
        <br />
        <Button.Group widths="3" size="small">
          <Button content="Calisthenics" />
          <Button content="Gym" />
          <Button content="Mixed" />
        </Button.Group>
        <br /> <br />
        <Button.Group widths="4" size="small">
          <Button content="Upper body" />
          <Button content="Lower body" />
          <Button content="Full body" />
          <Button content="Core" />
        </Button.Group>
        <br /> <br />
        <Button.Group widths="3" size="small">
          <Button content="Beginner" />
          <Button content="Intermediate" />
          <Button content="Advanced" />
        </Button.Group>
        <br />
        <br />
        <Button.Group fluid>
          <Button>Number of exercises</Button>
          <Dropdown options={numberOfExercises} button />
        </Button.Group>
        <br />
      </div>
    );
  }
}
