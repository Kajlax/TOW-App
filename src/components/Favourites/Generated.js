import React from "react";
import { Link } from "react-router-dom";

export default class Generated extends React.PureComponent {
  renderRows = () => {
    const { saved } = this.props;
    return saved.map((row, i) => {
      if (i !== 0) {
        return (
          <div key={row}>
            <Link to={`/savedworkout/${row}`}>{row}</Link>
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
