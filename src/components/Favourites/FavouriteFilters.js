import React, { PureComponent } from "react";
import { Header, Tab } from "semantic-ui-react";
import Generated from "./Generated";
import Challenges from "./Challenges";
import Workouts from "./Workouts";

class Filters extends PureComponent {
  render() {
    const { saved } = this.props;
    const { challenges } = this.props;
    const { workouts } = this.props;
    console.log("favouritefil vastaanottaa", challenges);

    const panes = [
      {
        menuItem: "Workouts",
        render: () => [
          <Tab.Pane key={1}>
            <Header as="h2" content="Favourite workouts" />
            <Workouts workouts={workouts} />
            <br />
          </Tab.Pane>
        ]
      },
      {
        menuItem: "Challenges",
        render: () => [
          <Tab.Pane key={2}>
            <Header as="h2" content="Favourite challenges" />
            <Challenges challenges={challenges} />
            <br />
          </Tab.Pane>
        ]
      },
      {
        menuItem: "Generated",
        render: () => [
          <Tab.Pane key={3}>
            <Header as="h2" content="Favourite generated" />
            <Generated saved={saved} />
            <br />
          </Tab.Pane>
        ]
      }
    ];

    return (
      <div>
        <Tab
          menu={{
            color: "teal",
            inverted: true,
            attached: "top",
            tabular: false
          }}
          panes={panes}
        />
      </div>
    );
  }
}

export default Filters;
