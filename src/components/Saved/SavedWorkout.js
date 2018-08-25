import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Layout from "../Layout";
import WorkoutComponent from "./WorkoutComponent"; 
import SavedWorkoutTypes from '../../redux/reducers/savedworkoutRedux';
import Loading from '../Loading';

class SavedWorkout extends React.PureComponent {
  componentDidMount() {
    this.props.fetchSavedWorkout(this.props.match.params.name);
  }

  render() {
    const { fetching, workout } = this.props;

    return(
      <Layout {...this.props}>
        <Grid columns={1} stackable>
          { !fetching &&  workout.name ?
              <WorkoutComponent workout={workout} /> 
            : <Loading />
          }
        </Grid>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  workout: state.savedworkout.workout,
  error: state.savedworkout.workout,
  fetching: state.savedworkout.fetching,
});

const mapDispatchToProps = dispatch => ({
  fetchSavedWorkout: (name) => dispatch(SavedWorkoutTypes.fetchSavedWorkout(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedWorkout);