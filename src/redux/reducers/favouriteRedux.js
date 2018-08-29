import { createReducer, createActions } from "reduxsauce";
import produce from "immer";
import { getStorageValue, createArray, setStorageValue } from '../../util';

let workouts = getStorageValue('workoutsets');
let challenges = getStorageValue('challenges');
let saved = getStorageValue('saved');

const { Types, Creators } = createActions({
  updateWorkouts: ["id", "defaultRating"],
  updateChallenges: ["id", "defaultRating"],
  updateSaved: ["name"],
});

export const FavouriteTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  workouts: createArray(workouts),
  challenges: createArray(challenges),
  saved: saved.split(","),
};

export const updateWorkouts = (state, { id, defaultRating }) => {
  let newFavourites = null;
  if (defaultRating === 0) {
    newFavourites = state.workouts.concat(id);
  } else {
    newFavourites = state.workouts.filter(i => id !== i);
  }

  setStorageValue('workoutsets', newFavourites.toString());

  return produce(state, draft => {
    draft.workouts = newFavourites;
  });
};

export const updateChallenges = (state, { id, defaultRating }) => {
  let newFavourites = null;
  if (defaultRating === 0) {
    newFavourites = state.challenges.concat(id);
  } else {
    newFavourites = state.challenges.filter(i => id !== i);
  }

  setStorageValue('challenges', newFavourites.toString());

  return produce(state, draft => {
    draft.challenges = newFavourites;
  });
};

export const updateSaved = (state, { name }) => {
  let newFavourites = state.saved.concat(name);
  setStorageValue('saved', newFavourites.toString());

  return produce(state, draft => {
    draft.saved = newFavourites;
  });
};


export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_WORKOUTS]: updateWorkouts,
  [Types.UPDATE_CHALLENGES]: updateChallenges,
  [Types.UPDATE_SAVED]: updateSaved,
});
