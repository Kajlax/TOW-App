import { createReducer, createActions } from "reduxsauce";
import produce from "immer";

const getFavourites = (key) => {
  const favourites = localStorage.getItem(key);
  if (favourites) {
    return favourites;
  }
  return "0";
};

const createFavouriteArray = favouriteString => {
  const myFavourites = favouriteString.split(",");
  myFavourites.forEach((element, index) => {
    myFavourites[index] = parseInt(myFavourites[index], 10);
  });

  return myFavourites;
};

let workouts = getFavourites('workoutsets');
let challenges = getFavourites('challenges');
let saved = getFavourites('saved');

const { Types, Creators } = createActions({
  updateWorkouts: ["id", "defaultRating"],
  updateChallenges: ["id", "defaultRating"],
  updateSaved: ["id", "defaultRating"],
});

export const FavouriteTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  workouts: createFavouriteArray(workouts),
  challenges: createFavouriteArray(challenges),
  saved: createFavouriteArray(saved),
};

export const updateWorkouts = (state, { id, defaultRating }) => {
  let newFavourites = null;
  if (defaultRating === 0) {
    newFavourites = state.workouts.concat(id);
  } else {
    newFavourites = state.workouts.filter(i => id !== i);
  }

  localStorage.setItem("workoutsets", newFavourites.toString());

  return produce(state, draft => {
    draft.workouts = newFavourites;
  });
};

export const updateChallenges = (state, { id, defaultRating }) => {
  let newFavourites = null;
  if (defaultRating === 0) {
    newFavourites = state.workouts.concat(id);
  } else {
    newFavourites = state.workouts.filter(i => id !== i);
  }

  localStorage.setItem("challenges", newFavourites.toString());

  return produce(state, draft => {
    draft.workouts = newFavourites;
  });
};

export const updateSaved = (state, { id, defaultRating }) => {
  let newFavourites = null;
  if (defaultRating === 0) {
    newFavourites = state.workouts.concat(id);
  } else {
    newFavourites = state.workouts.filter(i => id !== i);
  }

  localStorage.setItem("saved", newFavourites.toString());

  return produce(state, draft => {
    draft.workouts = newFavourites;
  });
};


export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_WORKOUTS]: updateWorkouts,
  [Types.UPDATE_CHALLENGES]: updateChallenges,
  [Types.UPDATE_SAVED]: updateSaved,
});
