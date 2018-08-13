import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import Routes from "./Routes";
import { Context } from "./context";

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const apiUrl = 'https://evolve-fitness.herokuapp.com';

class App extends Component {
  constructor(p) {
    super(p);
    this.state = {
      workouts: [],
      challenges: [],
      workoutsets: [],
      filters: [],
      getWorkouts: this.getWorkouts,
      updateFilters: this.updateFilters,
      getChallenges: this.getChallenges,
      getWorkoutSets: this.getWorkoutSets,
      searchQuery: "",
      updateSearchQuery: this.updateSearchQuery
    };
  }

  updateSearchQuery = searchQuery => {
    this.setState({
      searchQuery
    });
  };

  getWorkouts = async () => {
    const { filters } = this.state;
    let success = false;
    if (filters.length === 0) {
      success = this.getAllWorkouts();
    } else {
      success = this.getFilteredWorkouts();
    }
    return success;
  };

  getAllWorkouts = async () => {
    try {
      const work = await axios.get(
        `${apiUrl}/workout/`
      );
      this.setState({
        workouts: shuffle(work.data)
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  getFilteredWorkouts = async () => {
    const { filters } = this.state;
    try {
      const workouts = await axios.post(
        `${apiUrl}/workout/filter`,
        {
          tags: filters
        }
      );
      this.setState({
        workouts: shuffle(workouts.data)
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  updateFilters = value => {
    const { filters } = this.state;

    const index = filters.indexOf(value);
    if (index > -1) {
      filters.splice(index, 1);
    } else {
      filters.push(value);
    }
    this.setState({
      filters
    });
  };

  getChallenges = async () => {
    try {
      const challenge = await axios.get(
        `${apiUrl}/challenge/`
      );
      this.setState({
        challenges: challenge.data
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  getWorkoutSets = async () => {
    try {
      const workoutset = await axios.get(
        `${apiUrl}/workoutset/`
      );
      this.setState({
        workoutsets: workoutset.data
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <Routes />
      </Context.Provider>
    );
  }
}

export default App;
