import React from "react";
import Layout from "./Layout";
import { Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class About extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Header color="teal" as="h3">
          What is the Tribe of wolves?
        </Header>
        Tribe of wolves is a workout application designed for calisthenics and
        gym training. Each challenge and workout is a favourite routine by a
        wolf-athlete. The tribe shares their routines for other wolves to try.
        Together we grow stronger. For we are a community. We are the Tribe of
        wolves.
        <br />
        <Header color="teal" as="h3">
          Workouts
        </Header>
        The workout section contains pre-made, approved workouts. Browse or use
        filtering.
        <br />
        <Header color="teal" as="h3">
          Challenges
        </Header>
        When you feel ready, test your strength and endurance with the
        challenges section. Challenges should be done without pause, each
        exercise and rep non-stop to the end. The description gives more details
        about the challenge, for example a time to beat.
        <br />
        <Header color="teal" as="h3">
          Adjust the difficulty
        </Header>
        Adjust the difficulty of each challenge and workout. Press the title to
        access the challenge/workout and adjust the difficulty with the
        difficulty bar. Difficulty range 25% - 100%.
        <br />
        <Header color="teal" as="h3">
          Favourites
        </Header>
        Press the heart icon to add a routine to your favourites list.
        <br />
        <Header color="teal" as="h3">
          Voting
        </Header>
        Give your favourite workout an upVote with the voting arrows at the
        bottom. The total upVote count is displayed.
        <br />
        <Header color="teal" as="h3">
          Generate a workout
        </Header>
        The generate section creates instantly a workout by chosen preferences.
        Choose your preferences from the filters pane and click generate. This
        can be used as a WOD (workout of the day). Never run out of ideas.
        <br />
        <br />
        Tip: Set the number of exercises to 4 and hit generate. Perform one
        round and hit generate again for a varied second round. Get ready to be
        addicted..
        <br />
        <Header color="teal" as="h3">
          Submit your challenge or workout
        </Header>
        Become a part of the tribe and submit your favourite challenge or
        workout. Submitted routines will go through a moderating and approval
        process before publishing. This may take a few days.
        <br />
        <br />
        <Link to="/submit">
          <Button content="Submit" color="teal" size="small" />
        </Link>
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
