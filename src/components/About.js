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
          Workouts and challenges
        </Header>
        Head out to the workout section and choose a pre-made, approved workout.
        When you're ready test your strength and endurance with the challenges
        section.
        <br />
        <Header color="teal" as="h3">
          Evolve: Generate
        </Header>
        Evolve: Generate creates quickly a workout by chosen preferences. Choose
        your workout preferences from the filters pane and click generate. Never
        run out of ideas.
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
