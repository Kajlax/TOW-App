import React from "react";
import { connectContext } from "react-connect-context" 
import { Context } from '../context';
import Layout from "./Layout";
import Filters from "./Filters";
import GeneratedWorkout from "./GeneratedWorkout";
import { Button } from "semantic-ui-react";
import { CSSTransitionGroup } from "react-transition-group";
import "./Animations.css";

class Frontpage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      hideFilters: false,
      filterIcon: "caret up",
      hideGeneratedWorkout: true
    };
  }

  toggleFilters = () => {
    const { hideFilters, filterIcon } = this.state;
    const icon = filterIcon === "caret up" ? "caret down" : "caret up";

    this.setState({
      hideFilters: !hideFilters,
      filterIcon: icon,
    });
  }

  toggleGenerateWorkout = async () => {
    const success = await this.props.getWorkouts();
    console.log('success', success);
    if(success) {
      this.setState({
        hideGeneratedWorkout: false
      });  
    }
  }
  
  render() {
    const { hideFilters, hideGeneratedWorkout, filterIcon } = this.state;
    const { workouts } = this.props;
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

        <Button
          content="Generate"
          color="pink"
          size="small"
          onClick={this.toggleGenerateWorkout}
        />
        <br />
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          { 
            !hideFilters ? <Filters /> : null 
          }
        </CSSTransitionGroup>
        <br />
        {
          !hideGeneratedWorkout ? <GeneratedWorkout workouts={workouts} /> : null
        }
      </Layout>
    );
  }
}

export default connectContext(Context)(Frontpage);
