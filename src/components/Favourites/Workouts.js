import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, List } from "semantic-ui-react";
import useWorkoutState from "../Workouts/useWorkoutState";

const Workouts = props => {
  const [data, actions] = useWorkoutState();
  const { workoutsets } = data;
  const { getWorkoutSets } = actions;
  const { savedWorkouts } = props;

  useEffect(() => {
    if (workoutsets.length === 0) {
      getWorkoutSets();
    }
  }, [getWorkoutSets, workoutsets]);

  const renderRows = () => {
    if (savedWorkouts.length > 1) {
      return workoutsets.map(row => {
        if (savedWorkouts.includes(row.id)) {
          return (
            <List.Item key={row.id}>
              <List.Icon name="heart outline" size="large" verticalAlign="middle" />
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
    } else {
      return <Header as="h2" subheader="You haven't added any favourites" />;
    }
  };

  return (
    <List divided relaxed celled>
      {renderRows()}
    </List>
  );
};

export default Workouts;
