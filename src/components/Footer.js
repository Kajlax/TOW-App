import React from "react";
import { Header, Segment } from "semantic-ui-react";

const segmentStyle = {
  position: "fixed",
  left: 0,
  bottom: 0,
  height: 40,
  width: "100%",
  borderRadius: 0
};

export default class Footer extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <Segment inverted style={segmentStyle}>
          <div className="ui center aligned container">
            <Header as="h6" inverted>
              Tribe of wolves, 2018.
            </Header>
          </div>
        </Segment>
      </React.Fragment>
    );
  }
}
