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
      getWorkouts: this.getWorkouts,
    };
  }

  getWorkouts = async () => {
    try {
      const work = await axios.get('http://localhost:1337/workout');
      this.setState({
        workouts: work.data,
      })
    } catch(e) {

    }
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
