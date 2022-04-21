import Vuex from "vuex";
import { createStore } from "vuex";
import getters from "./getters";
import user from "@/store/modules/user";
import appConfig from "@/store/modules/app";
import createPersistedState from "vuex-persistedstate";
export const store = createStore({
  modules: {
    app: appConfig,
    user,
  },
  getters,
  plugins: [createPersistedState()],
});

export default store;
