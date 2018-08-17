import { call, put } from 'redux-saga/effects';
import WorkoutActions from '../../redux/reducers/workoutRedux';

export function* getWorkouts(api, action) {
  let response = null;
  
  if(action.filters.length === 0) {
    response = yield call(api.getWorkouts);
  } else {
    response = yield call(api.getFilteredWorkouts, action.filters);
  }

  if(response.ok) {
    yield put(WorkoutActions.fetchWorkoutsSuccess(response.data));
  } else {

    let error = {
      error: true,
    };
    if(response.data.message) {
      error.message = response.data.message;
    }

    yield put(WorkoutActions.fetchWorkoutsError(error));
  }
}