import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import axios from 'axios';
import Routes from "./Routes";
import { Context } from './context';

class App extends Component {
  constructor(p) {
    super(p);
    this.state = {
      workouts: [],
      filters: [],
      getWorkouts: this.getWorkouts,
      updateFilters: this.updateFilters,
    };
  }

  getWorkouts = async () => {
    const { filters } = this.state;
    let success = false; 
    if (filters.length === 0) {
      success = this.getAllWorkouts();
    } else {
      success = this.getFilteredWorkouts();
    }
    return success;
  }

  getAllWorkouts = async () => {
    try {
      const work = await axios.get('https://evolve-fitness.herokuapp.com/workout/');
      this.setState({
        workouts: work.data,
      });
      return true;
    } catch(e) {
      return false;
    }
  }

  getFilteredWorkouts = async () => {
    const { filters } = this.state;
    try {
      const workouts = await axios.post('https://evolve-fitness.herokuapp.com/workout/filter',
      {
        tags: filters,
      });
      this.setState({
        workouts: workouts.data,
      });
      return true;
    } catch(e) {
      return false;
    }
  }

  updateFilters = (value) => {
    const { filters } = this.state;

    const index = filters.indexOf(value);
    if(index > -1) {
      filters.splice(index, 1);
    } else {
      filters.push(value);
    }
    this.setState({
      filters
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <Routes />
      </Context.Provider>
      );
  }
}

export default App;
