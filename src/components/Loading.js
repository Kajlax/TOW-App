import React from "react";
import { Grid, Icon } from "semantic-ui-react";

export default class Loading extends React.PureComponent {
  render() {
    return [
      <Grid.Column>&nbsp;</Grid.Column>,
      <Grid.Column textAlign="center">
        <Icon size="huge" loading name="spinner" />
      </Grid.Column>,
      <Grid.Column>&nbsp;</Grid.Column>
    ];
  }
}
