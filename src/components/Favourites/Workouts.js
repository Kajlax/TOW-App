import React from "react";
import { Link } from "react-router-dom";

export default class Workouts extends React.PureComponent {
  renderRows = () => {
    const { workouts } = this.props;
    return workouts.map((row, i) => {
      if (i !== 0) {
        return (
          <div key={1}>
            <Link to={`/workouts/${row}`}>{row}</Link>
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
