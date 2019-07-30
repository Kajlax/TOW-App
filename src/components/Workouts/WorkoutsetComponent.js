import React from "react";
import { Container, Grid, Header, Icon, Label, Rating, Segment, Table, Progress } from "semantic-ui-react";
import { Link } from "react-router-dom";

const heartStyle = {
  marginRight: "30px",
};

const checkVoteStatus = (myVotes, cId) => {
  return myVotes.find(id => id === cId);
};

const checkFavouriteStatus = (myFavourites, cId) => {
  return myFavourites.find(id => id === cId);
};

const WorkoutsetComponent = props => {
  const { workoutset, favourite, myFavourites, vote, myVotes } = props;
  let { difficulty } = props;
  const { score, id, name, submitter, challenge, description, rating1, rating2 } = workoutset;
  const isFavourite = checkFavouriteStatus(myFavourites, id);
  const isVotedOn = checkVoteStatus(myVotes, id);
  const setUrl = `/workouts/${id}`;

  const WorkoutSetRows = ({ workoutsets }) => {
    if (!difficulty) {
      difficulty = 1;
    }

    return workoutsets.map(item => {
      let calculatedReps = item.reps * difficulty;
      calculatedReps = Math.floor(calculatedReps);
      calculatedReps = calculatedReps < 1 ? 1 : calculatedReps;

      return (
        <Table.Row key={item.id}>
          <Table.Cell width={9}>{item.name}</Table.Cell>
          <Table.Cell width={7}>
            {item.rounds !== 1 ? `${item.rounds} x ` : null} {calculatedReps}
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  const handleFavourite = () => {
    favourite(id, isFavourite ? 1 : 0);
  };

  const handleVote = () => {
    vote(id, isVotedOn ? "down" : "up");
  };

  return (
    <Grid.Column>
      <Segment color="purple">
        <Link to={setUrl}>
          <Header as="h2" content={name} subheader={submitter} textAlign="center" />
        </Link>
        <Table color="purple" inverted unstackable compact columns={2}>
          <Table.Body>
            <WorkoutSetRows workoutsets={challenge} />
          </Table.Body>
        </Table>
        {description}
        <br />
        <br />
        <Progress value={rating1} total="5" label="Endurance" progress="ratio" color="orange" />
        <Progress value={rating2} total="5" label="Strength" progress="ratio" color="yellow" />
        <br />
        <Container textAlign="center">
          <Label attached="bottom">
            <HeartIcon onClick={handleFavourite} isFavourite={isFavourite} />
            <ArrowIcons onClick={handleVote} votingDone={isVotedOn} />
            {score}
          </Label>
        </Container>
      </Segment>
      <br />
    </Grid.Column>
  );
};

const HeartIcon = ({ onClick, isFavourite }) => {
  return <Rating icon="heart" defaultRating={isFavourite ? 1 : 0} maxRating={1} size="large" style={heartStyle} onClick={onClick} />;
};

const ArrowIcons = ({ onClick, votingDone }) => {
  return [
    <Icon key={1} color="black" disabled={votingDone ? true : false} onClick={votingDone ? null : onClick} name="arrow up" />,
    <Icon key={2} color="black" disabled={votingDone ? false : true} onClick={votingDone ? onClick : null} name="arrow down" />,
  ];
};

export default WorkoutsetComponent;
