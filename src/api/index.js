import apisauce from 'apisauce';

const baseURL = 'https://api.tribeofwolvesapp.com';

const create = () => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000,
  });


  const getWorkouts = () => api.get('/workout/');
  const getFilteredWorkouts = (tags) => api.post('/workout/filter', { tags });
  const getChallenges = () => api.get('/challenge/');
  const getWorkoutsets = () => api.get('/workoutset/');
  const voteUp = (id) => api.post(`/challenge/${id}/voteup`);
  const voteDown = (id) => api.post(`/challenge/${id}/votedown`);
  const suggestWorkout = (data) => api.post('/challenge/suggest', data);


  return {
    getChallenges,
    getWorkoutsets,
    voteUp,
    voteDown,
    getWorkouts,
    getFilteredWorkouts,
    suggestWorkout,
  }
};

export default {
  create,
}