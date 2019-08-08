import React from "react";
import { Link } from "react-router-dom";
import { List, Header } from "semantic-ui-react";

const Generated = ({ saved }) => {
  const renderRows = () => {
    if (saved.length > 1) {
      return saved.map((row, i) => {
        if (i !== 0) {
          return (
            <List.Item key={row}>
              <List.Icon name="heart outline" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header>
                  <Link to={`/savedworkout/${row}`}>{row}</Link>
                </List.Header>
                <List.Description>Generated workout</List.Description>
              </List.Content>
            </List.Item>
          );
        }
        return null;
      });
    }

    return <Header as="h2" subheader="You haven't added any generated workouts." />;
  };

  return (
    <List divided relaxed celled>
      {renderRows()}
    </List>
  );
};

export default Generated;
