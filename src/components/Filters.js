import React, { Component } from "react";
import { Button } from "semantic-ui-react";

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
        <br />
      </div>
    );
  }
}
