import React from "react";
import { Button } from "semantic-ui-react";

const difficulties = [
  {
    color: "green",
    text: "25 %",
    multiplier: 0.25,
  },
  {
    color: "yellow",
    text: "50 %",
    multiplier: 0.5,
  },
  {
    color: "orange",
    text: "75 %",
    multiplier: 0.75,
  },
  {
    color: "red",
    text: "100 %",
    multiplier: 1,
  },
];

const DifficultyChanger = ({ setDifficulty }) => {
  const Difficulties = () => {
    return difficulties.map(d => {
      return <Button onClick={() => setDifficulty(d.multiplier)} content={d.text} color={d.color} key={d.text} />;
    });
  };

  return (
    <Button.Group widths="4" size="small">
      <Difficulties />
    </Button.Group>
  );
};

export default DifficultyChanger;
