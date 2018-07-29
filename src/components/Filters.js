import React, { Component } from "react";
import { Button, Dropdown } from "semantic-ui-react";

const trainingStyle = [
  { key: "Calisthenics", text: "Calisthenics", value: "Calisthenics" },
  { key: "Gym", text: "Gym", value: "Gym" },
  { key: "Mixed", text: "Mixed", value: "Mixed" }
];

const bodyPart = [
  { key: "Upper body", text: "Upper body", value: "Upper body" },
  { key: "Lower body", text: "Lower body", value: "Lower body" },
  { key: "Full body", text: "Full body", value: "Full body" },
  { key: "Core", text: "Core", value: "Core" }
];

const difficulty = [
  { key: "Beginner", text: "Beginner", value: "Beginner" },
  { key: "Intermediate", text: "Intermediate", value: "Intermediate" },
  { key: "Advanced", text: "Advanced", value: "Advanced" }
];

const numberOfExcercises = [
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
        <Button.Group>
          <Button>Training style</Button>
          <Dropdown options={trainingStyle} button />
        </Button.Group>
        <br /> <br />
        <Button.Group>
          <Button>Body part</Button>
          <Dropdown options={bodyPart} button />
        </Button.Group>
        <br /> <br />
        <Button.Group>
          <Button>Difficulty</Button>
          <Dropdown options={difficulty} button />
        </Button.Group>
        <br />
        <br />
        <Button.Group>
          <Button>Number of excercises</Button>
          <Dropdown options={numberOfExcercises} button />
        </Button.Group>
        <br />
      </div>
    );
  }
}
