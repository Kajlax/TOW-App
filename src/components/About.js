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
        Evolve App is a workout application designed for calisthenics and gym
        training.
        <br />
        <Header color="teal" as="h3">
          Workouts
        </Header>
        The workout section contains pre-made, approved workouts. Browse
        workouts or use filtering. Press the title of the workout and scale the
        amount of reps to decrease difficulty. Difficulty range 25% - 100%.
        <br />
        <Header color="teal" as="h3">
          Challenges
        </Header>
        When you feel ready test your strength and endurance with the challenges
        section. Challenges should be done without pause, each rep and exercise
        non-stop to the end. The description field tells more details about the
        challenge, for example a time to beat to complete the challenge.
        <br />
        <Header color="teal" as="h3">
          Evolve: Generate
        </Header>
        Evolve: Generate creates quickly a workout by chosen preferences. Choose
        suitable workout preferences from the filters pane and click generate.
        Can be used as a WOD (workout of the day). Never run out of ideas.
        <br />
        <Header color="teal" as="h3">
          Creators
        </Header>
        Created by Kaj Laxström and Lauri Katajisto.
        <br />
        <br />
        <br />
        <br />
      </Layout>
    );
  }
}
