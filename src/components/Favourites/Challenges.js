import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, List } from "semantic-ui-react";
import useChallengeState from "../Challenges/useChallengeState";

const Challenges = props => {
  const [reduxState, reduxActions] = useChallengeState();
  const { challenges } = reduxState;
  const { getChallenges } = reduxActions;
  const { savedChallenges } = props;

  useEffect(() => {
    if (challenges.length === 0) {
      getChallenges();
    }
  }, [getChallenges, challenges]);

  const renderRows = () => {
    if (savedChallenges.length > 1) {
      return challenges.map(row => {
        if (savedChallenges.includes(row.id)) {
          return (
            <List.Item key={row.id}>
              <List.Icon name="heart outline" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header>
                  <Link to={`/challenges/${row.id}`}>{row.name}</Link>
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

export default Challenges;
