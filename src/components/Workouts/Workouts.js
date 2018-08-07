import React from "react";
import { connectContext } from "react-connect-context";
import { Context } from "../../context";
import Layout from "../Layout";
import Filters from "./WorkoutFilters";
import { Button, Grid, Header, Rating, Table } from "semantic-ui-react";
import { CSSTransitionGroup } from "react-transition-group";
import "../Animations.css";

class WorkoutSets extends React.PureComponent {
  componentDidMount() {
    this.props.getWorkoutSets();
  }
  constructor() {
    super();
    this.state = {
      hideFilters: true,
      filterIcon: "caret down"
    };
  }

  toggleFilters = () => {
    const { hideFilters, filterIcon } = this.state;
    const icon = filterIcon === "caret up" ? "caret down" : "caret up";

    this.setState({
      hideFilters: !hideFilters,
      filterIcon: icon
    });
  };

  renderWorkoutSets = () => {
    let { workoutsets } = this.props;
    return workoutsets.map(item => {
      return (
        <Grid.Column key={item.id}>
          <Header
            as="h3"
            content={item.name}
            subheader={item.submitter}
            dividing
            textAlign="center"
          />
          <Table color="purple" inverted unstackable compact columns={2}>
            <Table.Body>{this.renderWorkoutSetRow(item.challenge)}</Table.Body>
          </Table>
          <i>{item.description}</i>
          <br />
          <br />
          <Grid columns={2} unstackable="true">
            <Grid.Column>
              <Grid.Row>Endurance</Grid.Row>
              <Grid.Row>Strength</Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                <Rating
                  icon="star"
                  defaultRating={item.rating1}
                  maxRating={5}
                  disabled
                />
              </Grid.Row>
              <Grid.Row>
                <Rating
                  icon="star"
                  defaultRating={item.rating2}
                  maxRating={5}
                  disabled
                />
              </Grid.Row>
            </Grid.Column>
          </Grid>
          <br />
          <br />
        </Grid.Column>
      );
    });
  };

  renderWorkoutSetRow = workoutsets => {
    return workoutsets.map(item => {
      return (
        <Table.Row key={item.id}>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{item.reps}</Table.Cell>
        </Table.Row>
      );
    });
  };

  render() {
    const { hideFilters, filterIcon } = this.state;
    return (
      <Layout {...this.props}>
        <Button
          content="Filters"
          icon={filterIcon}
          labelPosition="right"
          color="teal"
          size="small"
          onClick={this.toggleFilters}
        />
        <Button content="Search" color="pink" size="small" />
        <br />
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {!hideFilters ? <Filters /> : null}
        </CSSTransitionGroup>
        <br />
        <br />
        <Grid columns={3} stackable>
          {this.renderWorkoutSets()}
        </Grid>
        <br />
        <br />
      </Layout>
    );
  }
}

export default connectContext(Context)(WorkoutSets);
