import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connectContext } from "react-connect-context";
import { Context } from "../../context";

class Filters extends Component {
  toggleButton = value => {
    this.props.updateFilters(value);
  };

  checkActive = value => {
    const { filters } = this.props;
    return filters.indexOf(value) > -1;
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

  renderDifficultyButton = (text, color) => {
    return (
      <Button
        active={this.checkActive(text)}
        onClick={() => this.toggleButton(text, color)}
        content={text}
        color={color}
      />
    );
  };

  render() {
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
        <Button.Group widths="4" size="small">
          {this.renderDifficultyButton("25 %", "green")}
          {this.renderDifficultyButton("50 %", "yellow")}
          {this.renderDifficultyButton("75 %", "orange")}
          {this.renderDifficultyButton("100 %", "red")}
        </Button.Group>
      </div>
    );
  }
}

export default connectContext(Context)(Filters);
