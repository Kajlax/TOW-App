import React from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

const Generated = ({ saved }) => {
  const renderRows = () => {
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
  };

  return (
    <List divided relaxed celled>
      {renderRows()}
    </List>
  );
};

export default Generated;
