import React from "react";
import { connectContext } from "react-connect-context";
import { Context } from "../context";
import Menu from "./Menu";
import Footer from "./Footer";
import { Header } from "semantic-ui-react";
import CoverImage from "../img/Frontpage.jpeg";

const bg = {
  backgroundImage: `url(${CoverImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  opacity: 0.6,
  height: "100vh"
};

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
        <div style={bg}>
          <Header
            as="h1"
            content="Evolve App"
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

export default connectContext(Context)(Frontpage);
