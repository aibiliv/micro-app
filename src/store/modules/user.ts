const state = {
  username: 1,
};
const mutations = {
  SET_USERNAME: (state, username) => {
    state.username = username;
  },
};

const getters = {
  username: (state) => state.username,
};
export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
