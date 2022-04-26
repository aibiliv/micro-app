// eslint-disable-next-line no-undef
console.log("PROJECT_CONFIG", PROJECT_CONFIG);

const state = {
  // eslint-disable-next-line no-undef
  appConfig: PROJECT_CONFIG,
};
const getters = {
  appConfig: (state) => state.appConfig,
};
export default {
  namespaced: true,
  state,
  getters,
};
