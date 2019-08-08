import React from "react";
import { Button, Dropdown } from "semantic-ui-react";

const dropdownvalues = [
  { key: "3", text: "3", value: "3" },
  { key: "4", text: "4", value: "4" },
  { key: "5", text: "5", value: "5" },
  { key: "6", text: "6", value: "6" },
  { key: "7", text: "7", value: "7" },
  { key: "8", text: "8", value: "8" },
];

const Filters = ({
  handleDropdownChange,
  numberOfExercises,
  difficulty,
  updateDifficulty,
  bodypart,
  updateBodypart,
  workoutType,
  updateWorkoutType,
}) => {
  return (
    <>
      <br />
      <Button.Group widths="3" size="small">
        <Button active={workoutType === "Calisthenics"} onClick={() => updateWorkoutType("Calisthenics")} content="Calisthenics" />;
        <Button active={workoutType === "Gym"} onClick={() => updateWorkoutType("Gym")} content="Gym" />;
        <Button active={workoutType === "Mixed"} onClick={() => updateWorkoutType("Mixed")} content="Mixed" />;
      </Button.Group>
      <br /> <br />
      <Button.Group widths="4" size="small">
        <Button active={bodypart === "Upper body"} onClick={() => updateBodypart("Upper body")} content="Upper body" />
        <Button active={bodypart === "Lower body"} onClick={() => updateBodypart("Lower body")} content="Lower body" />
        <Button active={bodypart === "Full body"} onClick={() => updateBodypart("Full body")} content="Full body" />
        <Button active={bodypart === "Core"} onClick={() => updateBodypart("Core")} content="Core" />
      </Button.Group>
      <br /> <br />
      <Button.Group widths="3" size="small">
        <Button active={difficulty === 1} onClick={() => updateDifficulty(1)} content="Beginner" />
        <Button active={difficulty === 2} onClick={() => updateDifficulty(2)} content="Intermediate" />
        <Button active={difficulty === 3} onClick={() => updateDifficulty(3)} content="Advanced" />
      </Button.Group>
      <br />
      <br />
      <Button.Group fluid>
        <Button>Number of exercises</Button>
        <Dropdown options={dropdownvalues} default text={`${numberOfExercises}`} button onChange={handleDropdownChange} />
      </Button.Group>
      <br />
    </>
  );
};

export default Filters;
