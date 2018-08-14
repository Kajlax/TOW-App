import React from "react";
import Layout from "../Layout";
import { Header } from "semantic-ui-react";

export default class Submit extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2" content="Submit" textAlign="center" />
      </Layout>
    );
  }
}
