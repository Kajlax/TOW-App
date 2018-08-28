import React, { PureComponent } from "react";
import { Button } from "semantic-ui-react";

class Filters extends PureComponent {
  favCategory = value => {
    console.log(value);
  };

  renderButtons = (buttons, firstIndex) => {
    return buttons.map((button, i) => {
      const buttonIndex = i + firstIndex;
      return (
        <Button
          key={buttonIndex}
          active={button.selected}
          content={button.title}
          color="teal"
          onClick={() => this.favCategory(button.title)}
        />
      );
    });
  };

  render() {
    const { filters } = this.props;
    const buttons = filters.slice(0, 3);

    return (
      <div>
        {this.renderButtons(buttons, 0)}
        <br />
      </div>
    );
  }
}

export default Filters;
