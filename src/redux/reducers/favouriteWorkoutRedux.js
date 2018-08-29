import { createReducer, createActions } from "reduxsauce";
import produce from "immer";

const getFavourites = () => {
  const favourites = localStorage.getItem("favWorkouts");
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

let myFavourites = getFavourites();

const { Types, Creators } = createActions({
  updateFavourites: ["id", "defaultRating"],
  favouritesUpdated: null
});

export const FavouriteTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  myFavourites: createFavouriteArray(myFavourites),
  updating: false
};

export const updateFavourites = (state, { id, defaultRating }) => {
  let newFavourites = null;
  if (defaultRating === 0) {
    newFavourites = state.myFavourites.concat(id);
  } else {
    newFavourites = state.myFavourites.filter(i => id !== i);
  }

  localStorage.setItem("favWorkouts", newFavourites.toString());

  return produce(state, draft => {
    draft.updating = true;
    draft.myFavourites = newFavourites;
  });
};

export const favouritesUpdated = state => {
  return state;
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_FAVOURITES]: updateFavourites,
  [Types.FAVOURITES_UPDATED]: favouritesUpdated
});
