import React from "react";
import { Header, Segment } from "semantic-ui-react";

const segmentStyle = {
  position: "fixed",
  left: 0,
  bottom: 0,
  height: 40,
  width: "100%",
  borderRadius: 0,
};

const Footer = () => {
  return (
    <>
      <br />
      <br />
      <Segment inverted style={segmentStyle}>
        <div className="ui center aligned container">
          <Header as="h6" inverted>
            Tribe of wolves, 2019.
          </Header>
        </div>
      </Segment>
    </>
  );
};

export default Footer;
