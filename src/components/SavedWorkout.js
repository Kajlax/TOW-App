import React from 'react';
import Layout from "./Layout";
import { connectContext } from "react-connect-context";
import { Context } from "../context";
import GeneratedWorkout from "./Generate/GeneratedWorkout"; 

class SavedWorkout extends React.PureComponent {
  componentDidMount() {
    this.props.getSavedWorkout(this.props.match.params.name);
  }

  render() {
    const { workouts, error } = this.props;
    return(
      <Layout {...this.props}>
        {
          error ?
          <span>{error.message}</span>:
          <GeneratedWorkout workouts={workouts} />
        }
      </Layout>
    );
  }
}

export default connectContext(Context)(SavedWorkout);