import { createReducer, createActions } from "reduxsauce";
import produce from "immer";

const getFavourites = () => {
  const favourites = localStorage.getItem("userFavourites");
  if (favourites) {
    return favourites;
  }
  return "0";
};

const createFavouriteArray = favouriteString => {
  const userFavourites = favouriteString.split(",");
  userFavourites.forEach((element, index) => {
    userFavourites[index] = parseInt(userFavourites[index], 10);
  });

  return userFavourites;
};

let userFavourites = getFavourites();

const { Types, Creators } = createActions({
  updateFavourites: ["id", "defaultRating"],
  favouritesUpdated: null
});

export const FavouriteTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  userFavourites: createFavouriteArray(userFavourites),
  updating: false
};

export const updateFavourites = (state, { id, defaultRating }) => {
  let newFavourites = null;
  if (defaultRating === 0) {
    newFavourites = state.userFavourites.concat(id);
  } else {
    newFavourites = state.userFavourites.filter(i => id !== i);
  }

  localStorage.setItem("userFavourites", newFavourites.toString());

  return produce(state, draft => {
    draft.updating = true;
    draft.userFavourites = newFavourites;
  });
};

export const favouritesUpdated = state => {
  return state;
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_FAVOURITES]: updateFavourites,
  [Types.FAVOURITES_UPDATED]: favouritesUpdated
});
