import React from "react";
import { Button } from "semantic-ui-react";

const ButtonGroup = ({ widths, buttons, index, toggleFilter }) => {
  const Buttons = () => {
    return buttons.map((button, i) => {
      const buttonIndex = i + index;
      return <Button key={buttonIndex} active={button.selected} content={button.title} onClick={() => toggleFilter(buttonIndex)} />;
    });
  };

  return (
    <Button.Group widths={widths} size="small">
      <Buttons />
    </Button.Group>
  );
};

const Filters = ({ filters, toggleFilter }) => {
  const firstButtons = filters.slice(0, 3);
  const secondButtons = filters.slice(3, 7);

  return (
    <>
      <br />
      <ButtonGroup widths={3} buttons={firstButtons} index={0} toggleFilter={toggleFilter} />
      <br />
      <br />
      <ButtonGroup widths={4} buttons={secondButtons} index={3} toggleFilter={toggleFilter} />
    </>
  );
};

export default Filters;
