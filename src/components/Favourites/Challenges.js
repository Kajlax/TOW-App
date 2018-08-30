import React from "react";
import { Link } from "react-router-dom";

export default class Challenges extends React.PureComponent {
  renderRows = () => {
    const { challenges } = this.props;
    return challenges.map((row, i) => {
      if (i !== 0) {
        return (
          <div key={row}>
            <Link to={`/challenges/${row}`}>{row}</Link>
          </div>
        );
      }
      return null;
    });
  };

  render() {
    return <div>{this.renderRows()}</div>;
  }
}
