import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import WorkoutsetActions from "../../redux/reducers/workoutsetRedux";
import Loading from "../Loading";

class Workouts extends React.Component {
  componentDidMount() {
    const { getWorkoutSets, workoutsets } = this.props;
    if (workoutsets.length === 0) {
      getWorkoutSets();
    }
  }

  renderRows = () => {
    const { workoutsets, savedWorkouts } = this.props;
    let savedModified = [];

    savedWorkouts.map(i => {
      if (i !== 0) {
        savedModified.push(i);
      }
      return savedModified;
    });

    return workoutsets.map(row => {
      if (savedModified.includes(row.id)) {
        return (
          <List.Item key={row.id}>
            <List.Icon
              name="heart outline"
              size="large"
              verticalAlign="middle"
            />
            <List.Content>
              <List.Header>
                <Link to={`/workouts/${row.id}`}>{row.name}</Link>
              </List.Header>
              <List.Description>{row.submitter}</List.Description>
            </List.Content>
          </List.Item>
        );
      }
      return null;
    });
  };

  render() {
    const { fetching, workoutsets } = this.props;
    return (
      <List divided relaxed celled>
        {!fetching && workoutsets.length > 0 ? this.renderRows() : <Loading />}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  workoutsets: state.workoutset.workoutsets,
  fetching: state.workoutset.fetching,
  error: state.workoutset.error
});

const mapDispatchToProps = dispatch => ({
  getWorkoutSets: () => dispatch(WorkoutsetActions.fetchWorkoutsets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workouts);
