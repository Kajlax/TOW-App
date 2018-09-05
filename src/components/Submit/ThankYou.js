import React from 'react';
import { Header, Segment, Button } from 'semantic-ui-react'; 

export default class ThankYou extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header as="h2" content="Thank you" textAlign="center" color="teal" />
        <Segment basic textAlign="center">
          <Header
            as="h2"
            subheader="Submit sent successfully. Your submit will go through a moderating process before publishing."
          />
          <br />
          <Button
            onClick={() => this.props.resetForm()}
            content="Submit new"
            color="teal"
          />
        </Segment>
      </React.Fragment>
    )
  }
}