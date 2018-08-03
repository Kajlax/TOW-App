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
        <Button.Group widths="3" size="small">
          {this.renderButton("Beginner")}
          {this.renderButton("Intermediate")}
          {this.renderButton("Advanced")}
        </Button.Group>
        <br />
        <br />Toistojen skaalaustoiminto?
      </div>
    );
  }
}

export default connectContext(Context)(Filters);
