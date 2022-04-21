const config = {
  system: {
    id: 1,
    name: "微应用系统",
    entry: "/src/projects/system/src/main.ts",
    input: "/src/projects/system/src/index.html",
    outDir: "./system",
    localPath: "src/projects/system",
    publicPath: "/system-web/",
    apiContext: "/system-web",
  },
  vueApp: {
    id: 2,
    name: "vue项目",
    entry: "/src/projects/vueApp/src/main.ts",
    input: "/src/projects/vueApp/src/index.html",
    outDir: "./vueApp",
    localPath: "src/projects/vueApp",
    publicPath: "/vueApp-web/",
    apiContext: "/vueApp-web",
  },
  reactApp: {
    id: 3,
    name: "react项目",
    entry: "/src/projects/reactApp/src/main.jsx",
    input: "/src/projects/reactApp/src/index.html",
    outDir: "./reactApp",
    localPath: "src/projects/reactApp",
    publicPath: "/reactApp-web/",
    apiContext: "/reactApp-web",
  },
};

module.exports = config;
