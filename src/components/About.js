import React from "react";
import Layout from "./Layout";
import { Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
        workouts or use filtering. Press the title of the workout to access it
        and scale the amount of reps to decrease difficulty. Difficulty range
        25% - 100%.
        <br />
        <Header color="teal" as="h3">
          Challenges
        </Header>
        When you feel ready test your strength and endurance with the challenges
        section. Challenges should be done without pause, each rep and exercise
        non-stop to the end. The description gives more details about the
        challenge, for example a time to beat. The difficulty of each challenge
        can be modified.
        <br />
        <Header color="teal" as="h3">
          Evolve: Generate
        </Header>
        Evolve: Generate creates instantly a workout by chosen preferences.
        Choose suitable workout preferences from the filters pane and click
        generate. Can be used as a WOD (workout of the day). Never run out of
        ideas.
        <br />
        <br />
        Tip: Set the number of exercises to 4 and hit generate. Perform one
        round and hit generate again for a varied second round. Get ready to be
        addicted..
        <br />
        <Header color="teal" as="h3">
          Submit
        </Header>
        Become a part of the community and submit your favourite workout or
        challenge.
        <br />
        <br />
        <Link to="/submit">
          <Button content="Submit" color="teal" size="small" />
        </Link>
        <br />
        <Header color="teal" as="h3">
          Creators
        </Header>
        Created by Kaj Laxström and Lauri Katajisto.
        <br />
        <br />
      </Layout>
    );
  }
}
