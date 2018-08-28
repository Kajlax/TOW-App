import React from "react";
import { Header } from "semantic-ui-react";
import Layout from "../Layout";

export default class Favourites extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2" content="Favourites" />
        <br />
      </Layout>
    );
  }
}
