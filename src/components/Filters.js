import React from "react";
import { Button, Header } from "semantic-ui-react";

export default class Filters extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Button
          content="Filters"
          icon="filter"
          labelPosition="right"
          color="teal"
        />
        <br />
        <br />
      </React.Fragment>
    );
  }
}
