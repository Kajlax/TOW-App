import React, { PureComponent } from "react";
import { Button } from "semantic-ui-react";

class Filters extends PureComponent {
  renderButtons = (buttons, firstIndex) => {
    return buttons.map((button, i) => {
      const buttonIndex = i + firstIndex;
      return (
        <Button
          key={buttonIndex}
          active={button.selected}
          content={button.title}
          onClick={() => this.props.toggleFilter(buttonIndex)}
        />
      );
    });
  };

  render() {
    const { filters } = this.props;
    const firstButtons = filters.slice(0, 3);
    const secondButtons = filters.slice(3, 7);

    return (
      <div>
        <br />
        <Button.Group widths="3" size="small">
          {this.renderButtons(firstButtons, 0)}
        </Button.Group>
        <br />
        <br />
        <Button.Group widths="4" size="small">
          {this.renderButtons(secondButtons, 3)}
        </Button.Group>
      </div>
    );
  }
}

export default Filters;
