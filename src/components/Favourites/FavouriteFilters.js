import React, { PureComponent } from "react";
import { Header, Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Workouts",
    render: () => <Header as="h3" content="Workouts" />
  },
  {
    menuItem: "Challenges",
    render: () => <Header as="h3" content="Challenges" />
  },
  {
    menuItem: "Generated",
    render: () => <Header as="h3" content="Generated" />
  }
];

class Filters extends PureComponent {
  render() {
    return (
      <div>
        <Tab
          menu={{
            color: "teal",
            inverted: true,
            attached: false,
            tabular: false
          }}
          panes={panes}
        />
        <br />
      </div>
    );
  }
}

export default Filters;
