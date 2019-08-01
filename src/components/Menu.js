import React from "react";
import { Dropdown, Menu as SemanticMenu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { routes } from "../Routes";

const Menu = props => {
  const renderDropdownItems = () => {
    return routes.map(item => {
      const { path } = props.match;
      if (item.showInMenu) {
        return (
          <Dropdown.Item key={item.Title} as={Link} active={path === item.Path} to={item.Path}>
            {item.Title}
          </Dropdown.Item>
        );
      }
      return null;
    });
  };

  return (
    <React.Fragment>
      <SemanticMenu fixed="top" color="black" inverted unstackable="true">
        <Dropdown item icon="bars" simple>
          <Dropdown.Menu>{renderDropdownItems()}</Dropdown.Menu>
        </Dropdown>
        <SemanticMenu.Item header>Tribe of wolves</SemanticMenu.Item>
      </SemanticMenu>
      <br />
      <br />
    </React.Fragment>
  );
};

export default Menu;
