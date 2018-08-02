import React, { PureComponent } from "react";
import { Dropdown, Menu as SemanticMenu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const dropdownItems = [
  {
    Title: "Workouts",
    Path: "/Workouts/Workouts"
  },
  {
    Title: "Challenges",
    Path: "/Challenges/Challenges"
  },
  {
    Title: "Evolve: Generate",
    Path: "/"
  },
  {
    Title: "About",
    Path: "/About"
  }
];

class Menu extends PureComponent {
  renderDropdownItems = () => {
    return dropdownItems.map(item => {
      const { path } = this.props.match;

      return (
        <Dropdown.Item
          key={item.Title}
          as={Link}
          active={path === item.Path}
          to={item.Path}
        >
          {item.Title}
        </Dropdown.Item>
      );
    });
  };

  render() {
    return (
      <SemanticMenu attached="top" color="black" inverted unstackable="true">
        <Dropdown item icon="bars" simple>
          <Dropdown.Menu>{this.renderDropdownItems()}</Dropdown.Menu>
        </Dropdown>
        <SemanticMenu.Item header>Evolve App</SemanticMenu.Item>
      </SemanticMenu>
    );
  }
}

export default Menu;
