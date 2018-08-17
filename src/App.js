import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Provider } from 'react-redux';
import Routes from "./Routes";
import { store } from './redux/store';


const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const apiUrl = 'https://evolve-fitness.herokuapp.com';
const getVotes = () => {
  const votes = localStorage.getItem('myVotes');
  if(votes) {
    return votes;
  }
  return '0';
}
const createVoteArray = (voteString) => {
  const myVotes = voteString.split(',');
  myVotes.forEach((element, index) => {
    myVotes[index] = parseInt(myVotes[index], 10);
  });
  
  return myVotes;
}

class App extends Component {
  constructor(p) {
    super(p);
    let myVotes = getVotes();
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
      updateSearchQuery: this.updateSearchQuery,
      myVotes: createVoteArray(myVotes),
      updateVotes: this.updateVotes,
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

  updateVotes = async (challengeId, mode) => {
    const { myVotes } = this.state;
    let newVotes = null;
    let result = null;

    try {
      if (mode === 'up') {
        newVotes = myVotes.concat(challengeId);
        result = await axios.post(`${apiUrl}/challenge/${challengeId}/voteup`);
      } else {
        newVotes = myVotes.filter(id => challengeId !== id);
        result = await axios.post(`${apiUrl}/challenge/${challengeId}/votedown`);
      }
      
      if(result.data.workouttype === 'challenge') {
        await this.getChallenges();
      } else {
        await this.getWorkoutSets();
      }
    } catch(e) {}

    this.setState({
      myVotes: newVotes,
    });

    localStorage.setItem('myVotes', newVotes.toString());
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
