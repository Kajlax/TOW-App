import React from "react";
import {
  Container,
  Grid,
  Icon,
  Label,
  Table,
  Header,
  Rating,
  Segment
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class WorkoutComponent extends React.PureComponent {
  renderChallengeRow = workouts => {
    let { reps } = this.props.workout;
    reps = reps.split(",");

    return workouts.map((item, i) => {
      return (
        <Table.Row key={item.id}>
          <Table.Cell width={9}>{item.name}</Table.Cell>
          <Table.Cell width={7}>{reps[i]}</Table.Cell>
        </Table.Row>
      );
    });
  };

  handleRemoveFavourite = () => {
    const { name } = this.props.workout;
    let savedStorage = localStorage.saved.split(",");
    let cleanedStorage = savedStorage.filter(function(e) {
      return e !== name;
    });
    localStorage.setItem("saved", cleanedStorage.toString());
    this.props.history.push("/favourites");
  };

  renderHeartIcon = () => {
    return (
      <Rating
        key={1}
        icon="heart"
        defaultRating={1}
        maxRating={1}
        size="large"
        onClick={this.handleRemoveFavourite}
      />
    );
  };

  render() {
    const { name, workouts } = this.props.workout;
    const url = `/savedworkout/${name}`;
    return (
      <Grid.Column>
        <Segment color="teal">
          <Link to={url}>
            <Header as="h2" to={url} content="The workout" textAlign="center" />
          </Link>
          <Table color="teal" inverted unstackable compact columns={2}>
            <Table.Body>{this.renderChallengeRow(workouts)}</Table.Body>
          </Table>
          <br />
          <Container textAlign="center">
            <Label attached="bottom">{this.renderHeartIcon()}</Label>
          </Container>
        </Segment>
        <Link to="/generate">
          <Icon name="angle double left" circular inverted size="large" />
        </Link>
      </Grid.Column>
    );
  }
}

export default withRouter(WorkoutComponent);
