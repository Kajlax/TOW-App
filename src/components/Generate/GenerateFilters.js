import React, { PureComponent } from "react";
import { Button, Dropdown } from "semantic-ui-react";

const dropdownvalues = [
  { key: "3", text: "3", value: "3" },
  { key: "4", text: "4", value: "4" },
  { key: "5", text: "5", value: "5" },
  { key: "6", text: "6", value: "6" },
  { key: "7", text: "7", value: "7" },
  { key: "8", text: "8", value: "8" }
];

class Filters extends PureComponent {
  toggleButton = value => {
    this.props.updateFilters(value);
  };

  checkActive = value => {
    const { filters } = this.props;
    return filters.includes(value);
  };

  renderButton = text => {
    return (
      <Button
        active={this.checkActive(text)}
        onClick={() => this.toggleButton(text)}
        content={text}
      />
    );
  };

  renderDifficulty = (text, value) => {
    return (
      <Button
        active={this.props.difficulty === value }
        onClick={() => this.props.updateDifficulty(value)}
        content={text}
      />
    );
  };

  render() {
    const { handleDropdownChange } = this.props;
    let { numberOfExercises } = this.props;
    numberOfExercises = `${numberOfExercises}`;

    return (
      <div>
        <br />
        <Button.Group widths="3" size="small">
          {this.renderButton("Calisthenics")}
          {this.renderButton("Gym")}
          {this.renderButton("Mixed")}
        </Button.Group>
        <br /> <br />
        <Button.Group widths="4" size="small">
          {this.renderButton("Upper body")}
          {this.renderButton("Lower body")}
          {this.renderButton("Full body")}
          {this.renderButton("Core")}
        </Button.Group>
        <br /> <br />
        <Button.Group widths="3" size="small">
          {this.renderDifficulty("Beginner", 1)}
          {this.renderDifficulty("Intermediate", 2)}
          {this.renderDifficulty("Advanced", 3)}
        </Button.Group>
        <br />
        <br />
        <Button.Group fluid>
          <Button>Number of exercises</Button>
          <Dropdown
            options={dropdownvalues}
            default
            text={numberOfExercises}
            button
            onChange={handleDropdownChange}
          />
        </Button.Group>
        <br />
      </div>
    );
  }
}

export default Filters;
