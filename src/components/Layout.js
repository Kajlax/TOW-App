import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

export default class Layout extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Menu {...this.props} />
        <br />
        <div className="ui container">{this.props.children}</div>
        <Footer />
      </React.Fragment>
    );
  }
}
