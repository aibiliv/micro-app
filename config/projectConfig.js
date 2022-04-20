const config = {
  system: {
    id: 1,
    name: "微应用系统",
    entry: "/src/projects/system/src/main.ts",
    localPath: "src/projects/system",
    publicPath: "/system-web/",
    apiContext: "/system-web",
  },
  vueApp: {
    id: 1,
    name: "vue项目",
    entry: "/src/projects/vueApp/src/main.ts",
    localPath: "src/projects/vueApp",
    publicPath: "/vueApp-web/",
    apiContext: "/vueApp-web",
  },
  reactApp: {
    id: 1,
    name: "react项目",
    entry: "/src/projects/reactApp/src/main.jsx",
    localPath: "src/projects/reactApp",
    publicPath: "/reactApp-web/",
    apiContext: "/reactApp-web",
  },
};

export default config;
