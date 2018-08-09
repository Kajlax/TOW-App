import React from "react";
import { connectContext } from "react-connect-context";
import { Context } from "../../context";
import Layout from "../Layout";
import Filters from "./WorkoutFilters";
import { Button, Grid } from "semantic-ui-react";
import { CSSTransitionGroup } from "react-transition-group";
import "../Animations.css";
import WorkoutsetComponent from './WorkoutsetComponent';

const filters = [
  {
    title: 'Calisthenics',
    selected: false,
  },
  {
    title: 'Gym',
    selected: false,
  },
  {
    title: 'Mixed',
    selected: false,
  },
  {
    title: 'Upper body',
    selected: false,
  },
  {
    title: 'Lower body',
    selected: false,
  },
  {
    title: 'Full body',
    selected: false,
  },
  {
    title: 'Core',
    selected: false,
  },
]

class WorkoutSets extends React.Component {
  componentDidMount() {
    this.props.getWorkoutSets();
  }
  constructor() {
    super();
    this.state = {
      hideFilters: true,
      filterIcon: "caret down",
      filters,
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
        <WorkoutsetComponent workoutset={item} key={item.id} />
      );
    });
  };

  toggleFilter = (index) => {
    const { filters } = this.state;
    const newState = filters.map((f, i) => {
      const filter = f;
      if(i === index) {
        filter.selected = !filter.selected;
      }
      return filter;
    });
    this.setState({
      filters: newState,
    });
  }

  render() {
    const { hideFilters, filterIcon, filters } = this.state;
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
          {
            !hideFilters ?
            <Filters
              filters={filters}
              toggleFilter={this.toggleFilter}
            />
            : 
            null
          }
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
