import React from "react";
import { connectContext } from "react-connect-context";
import { Context } from "../../context";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { Grid, Icon } from "semantic-ui-react";
import ChallengeComponent from './ChallengeComponent';

class Challenges extends React.PureComponent {
  componentDidMount() {
    this.props.getChallenges();
  }

  render() {
    console.log(this.props);
    const { challenges } = this.props;
    const id = parseInt(this.props.match.params.id, 10);

    const challenge = challenges.filter(c => c.id === id);
    console.log(challenge, id);
    return (
      <Layout {...this.props}>
        <Grid columns={1} stackable>
          {
            challenge.length > 0 ?
            <ChallengeComponent challenge={challenge[0]} />:
            null
          }
        </Grid>
        <Grid columns={1} stackable>
            <Link to="/challenges"><Icon name='angle double left' circular inverted /></Link>
        </Grid>
      </Layout>
    );
  }
}

export default connectContext(Context)(Challenges);
