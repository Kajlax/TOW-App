import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Header } from "semantic-ui-react";

const textStyle = {
  width: 220,
  height: 50,
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class Frontpage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Menu {...this.props} />
        <div className="frontpage-bg">
          <Header
            as="h1"
            content="Tribe of wolves"
            textAlign="center"
            inverted
            style={textStyle}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Frontpage;
