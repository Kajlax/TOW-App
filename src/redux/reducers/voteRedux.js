import { createReducer, createActions } from "reduxsauce";
import produce from "immer";

const getVotes = () => {
  const votes = localStorage.getItem("myVotes");
  if (votes) {
    return votes;
  }
  return "0";
};
const createVoteArray = voteString => {
  const myVotes = voteString.split(",");
  myVotes.forEach((element, index) => {
    myVotes[index] = parseInt(myVotes[index], 10);
  });

  return myVotes;
};

let myVotes = getVotes();

const { Types, Creators } = createActions({
  updateVotes: ["id", "mode"],
  votesUpdated: null
});

export const VoteTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  myVotes: createVoteArray(myVotes),
  updating: false
};

export const updateVotes = (state, { id, mode }) => {
  let newVotes = null;
  if (mode === "up") {
    newVotes = state.myVotes.concat(id);
  } else {
    newVotes = state.myVotes.filter(i => id !== i);
  }

  localStorage.setItem("myVotes", newVotes.toString());

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
