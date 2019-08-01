import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = props => {
  return (
    <>
      <Menu {...props} />
      <br />
      <div className="ui container">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
