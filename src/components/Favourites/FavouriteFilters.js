import React, { PureComponent } from "react";
import { Header, Tab } from "semantic-ui-react";
import Generated from './Generated';



class Filters extends PureComponent {
  render() {
    const { saved } = this.props;

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
        render: () => [<Header as="h3" content="Generated" />, <Generated saved={saved}/>]
      }
    ];

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
