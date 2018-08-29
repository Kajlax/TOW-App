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
          color="teal"
          onClick={() => this.renderFavourites(button.title)}
        />
      );
    });
  };

  renderFavourites = value => {
    if (value === "Workouts") {
      if (localStorage.getItem("favWorkouts") === null) {
        console.log("You haven't added any workouts");
      } else {
        console.log("Favourite workouts list");
      }
    } else if (value === "Challenges") {
      if (localStorage.getItem("favWorkouts") === null) {
        console.log("You haven't added any challenges");
      } else {
        console.log("Favourite workouts list");
      }
    } else if (value === "Generated") {
      if (localStorage.getItem("favWorkouts") === null) {
        console.log("You haven't added any generated workouts");
      } else {
        console.log("Favourite workouts list");
      }
    } else {
      return null;
    }
    return;
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
