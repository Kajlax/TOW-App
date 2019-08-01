import React from "react";
import { Grid, Icon } from "semantic-ui-react";

const Loading = () => {
  return [
    <Grid.Column key={1}>&nbsp;</Grid.Column>,
    <Grid.Column key={2} textAlign="center">
      <Icon size="huge" loading name="spinner" />
    </Grid.Column>,
    <Grid.Column key={3}>&nbsp;</Grid.Column>,
  ];
};

export default Loading;
