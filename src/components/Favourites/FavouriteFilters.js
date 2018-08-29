import React, { PureComponent } from "react";
import { Button, Grid, Header } from "semantic-ui-react";

class Filters extends PureComponent {
  renderButtons = (buttons, firstIndex) => {
    return buttons.map((button, i) => {
      const buttonIndex = i + firstIndex;
      return (
        <Button
          key={buttonIndex}
          active={button.selected}
          content={button.title}
          color="teal"
          onClick={() => this.renderFavourites(button.title)}
        />
      );
    });
  };

  renderFavourites = value => {
    let returnable = null;

    if (value === "Workouts") {
      console.log(value);
      returnable = [
        <Grid.Column key={1}>
          <Header as="h3" content="Workouts" />
        </Grid.Column>
      ];
    } else if (value === "Challenges") {
      returnable = [
        <Grid.Column key={1}>
          <Header as="h3" content="Challenges" />
        </Grid.Column>
      ];
    } else if (value === "Saved") {
      returnable = [
        <Grid.Column key={1}>
          <Header as="h3" content="Saved" />
        </Grid.Column>
      ];
    } else {
      return null;
    }
    return returnable;
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
