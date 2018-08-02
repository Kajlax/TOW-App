import React from "react";
import { connectContext } from "react-connect-context";
import { Context } from "../context";
import Layout from "./Layout";
import { Header, Segment } from "semantic-ui-react";

class Frontpage extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Segment inverted color="teal">
          <Header as="h2" content="Evolve App" textAlign="center" />
        </Segment>
      </Layout>
    );
  }
}

export default connectContext(Context)(Frontpage);
