import { takeLatest, all } from 'redux-saga/effects';
import API from '../../api';

// types
import { ChallengeTypes } from '../reducers/challengeRedux';

// sagas
import { getChallenges } from './challengeSagas';


const api = API.create();


export default function* sagas() {
  yield all([
    takeLatest(ChallengeTypes.FETCH_CHALLENGES, getChallenges, api),
  ]);
}