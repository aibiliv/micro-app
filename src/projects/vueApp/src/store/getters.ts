const getters = {
  appConfig: (state) => {
    const appId = "vueApp";
    return state.app.projectConfig[appId];
  },
};
export default getters;
