import React from "react";
import Layout from "./Layout";
import { Header } from "semantic-ui-react";

export default class About extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Header color="teal" as="h3">
          What is Evolve App?
        </Header>
        Evolve App is a workout application designed for both calisthenics and
        gym training.
        <br />
        <Header color="teal" as="h3">
          Evolve: Generate
        </Header>
        Evolve: Generate is the first component of the Evolve App and generates
        workouts by the users chosen preferences.
        <br />
        <Header color="teal" as="h3">
          Creators
        </Header>
        Created by Kaj Laxström and Lauri Katajisto.
        <br />
      </Layout>
    );
  }
}
