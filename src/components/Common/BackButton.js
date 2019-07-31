import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const BackButton = ({ to }) => {
  return (
    <Link to={to}>
      <Icon name="angle double left" circular inverted size="large" />
    </Link>
  );
};

export default BackButton;
