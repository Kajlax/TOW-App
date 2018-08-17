import { createReducer, createActions } from 'reduxsauce';
import produce from "immer";

const { Types, Creators } = createActions({
  updateQuery: ['query'],
});

export const SearchTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  searchQuery: '',
};

export const updateQuery = (state, { query }) => {
  return produce(state, draft => {
      draft.searchQuery = query;
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_QUERY]: updateQuery,
});
