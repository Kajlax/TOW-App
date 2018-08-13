import React from "react";
import { connectContext } from "react-connect-context";
import { Context } from "../../context";
import Layout from "../Layout";
import { Grid, Icon, Button } from "semantic-ui-react";
import ChallengeComponent from "./ChallengeComponent";
import { Link } from "react-router-dom";

const difficulties = [
  {
    color: "green",
    text: "25 %",
    multiplier: 0.25
  },
  {
    color: "yellow",
    text: "50 %",
    multiplier: 0.5
  },
  {
    color: "orange",
    text: "75 %",
    multiplier: 0.75
  },
  {
    color: "red",
    text: "100 %",
    multiplier: 1
  }
];

class Challenges extends React.PureComponent {
  constructor(p) {
    super(p);

    this.state = {
      difficulty: 1
    };
  }

  componentDidMount() {
    this.props.getChallenges();
  }

  selectDifficulty = value => {
    this.setState({
      difficulty: value
    });
  };

  renderDifficulties = () => {
    return difficulties.map(d => {
      return (
        <Button
          onClick={() => this.selectDifficulty(d.multiplier)}
          content={d.text}
          color={d.color}
          key={d.text}
        />
      );
    });
  };

  render() {
    const { challenges } = this.props;
    const { difficulty } = this.state;
    const id = parseInt(this.props.match.params.id, 10);

    const challenge = challenges.filter(c => c.id === id);
    return (
      <Layout {...this.props}>
        <Button.Group widths="4" size="small">
          {this.renderDifficulties()}
        </Button.Group>
        <br />
        <br />
        <br />
        <Grid columns={1} stackable>
          {challenge.length > 0 ? (
            <ChallengeComponent
              challenge={challenge[0]}
              difficulty={difficulty}
            />
          ) : null}
        </Grid>
        <Grid columns={1} stackable>
          <Link to="/challenges">
            <Icon name="angle double left" circular inverted />
          </Link>
        </Grid>
      </Layout>
    );
  }
}

export default connectContext(Context)(Challenges);
