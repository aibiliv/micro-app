const getters = {
  appConfig: (state) => {
    const appId = "system";
    return state.app.projectConfig[appId];
  },
};
export default getters;
