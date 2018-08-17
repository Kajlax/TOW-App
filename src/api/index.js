import apisauce from 'apisauce';

const baseURL = 'https://evolve-fitness-staging.herokuapp.com';

const create = () => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000,
  });


  const getChallenges = () => api.get('/challenge/');
  const voteUp = (id) => api.post(`/challenge/${id}/voteup`);
  const voteDown = (id) => api.post(`/challenge/${id}/votedown`);


  return {
    getChallenges,
    voteUp,
    voteDown,
  }
};

export default {
  create,
}