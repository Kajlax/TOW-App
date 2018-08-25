import { call, put } from 'redux-saga/effects';
import SavedWorkoutActions from '../../redux/reducers/savedworkoutRedux';

export function* getSavedWorkout(api, action) {
  const response = yield call(api.getGeneratedWorkout, action.name);

  if(response.ok) {
    yield put(SavedWorkoutActions.fetchSavedWorkoutSuccess(response.data));
  } else {
    yield put(SavedWorkoutActions.fetchSavedWorkoutError(response.data.message ? response.data.message : 'Error'));
  }
}

export function* saveGeneratedWorkout(api, action) {
  const data = {
    workouts: action.data.workouts,
    reps: action.data.reps.toString(),
  }
  const response = yield call(api.saveGeneratedWorkout, data);

  if(response.ok) {
    yield put(SavedWorkoutActions.createSavedWorkoutSuccess(response.data));
  } else {
    yield put(SavedWorkoutActions.fetchSavedWorkoutError(response.data.message ? response.data.message : 'Error'));
  }
}


