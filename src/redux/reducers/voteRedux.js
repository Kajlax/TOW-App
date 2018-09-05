import { createReducer, createActions } from "reduxsauce";
import produce from "immer";
import { getStorageValue, createArray, setStorageValue } from '../../util';

let myVotes = getStorageValue('myVotes');

const { Types, Creators } = createActions({
  updateVotes: ["id", "mode"],
  votesUpdated: null
});

export const VoteTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  myVotes: createArray(myVotes),
  updating: false
};

export const updateVotes = (state, { id, mode }) => {
  let newVotes = null;
  if (mode === "up") {
    newVotes = state.myVotes.concat(id);
  } else {
    newVotes = state.myVotes.filter(i => id !== i);
  }

  setStorageValue('myVotes', newVotes.toString());
  return produce(state, draft => {
    draft.updating = true;
    draft.myVotes = newVotes;
  });
};

export const votesUpdated = state => {
  return state;
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_VOTES]: updateVotes,
  [Types.VOTES_UPDATED]: votesUpdated
});
