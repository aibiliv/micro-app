import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";
import path from "path";
import projectConfig from "./config/projectConfig";
console.log("process.argv", process.argv);
function resolve(dir: any) {
  return path.join(__dirname, dir);
}
// 当前项目名
const projectName = process.argv[6].split("=")[1];
// 当前项目的配置
const curProjectConfig = projectConfig[projectName];

const transformIndexHtml = (code: string) => {
  return code.replace(/__INDEX__/, `${curProjectConfig.entry}`);
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log("command", command);
  console.log("mode", mode);
  let env = loadEnv(mode, process.cwd());
  let port = env[`VITE_APP_${projectName.toLocaleUpperCase()}_PORT`]; //当前项目的端口号
  return {
    define: {
      PROJECT_CONFIG: JSON.stringify(curProjectConfig),
    },
    resolve: {
      alias: {
        "~/": `${path.resolve(__dirname, "src")}/`,
        "@/": `${path.resolve(__dirname, "src")}/`,
        "*": resolve(curProjectConfig.localPath),
        assets: resolve(curProjectConfig.localPath + "/assets"),
      },
    },
    plugins: [
      {
        name: "index-transform",
        enforce: "pre",
        transform(code, id) {
          if (id.endsWith(".html")) {
            return { code: transformIndexHtml(code), map: null };
          }
        },
        transformIndexHtml,
      },
      vue(),
      react(),
    ],
    build: {
      // es2020 支持 import.meta 语法
      target: "es2020",
      // rollupOptions: {
      // 用于控制 Rollup 尝试确保入口块与基础入口模块具有相同的导出
      // preserveEntrySignatures: "allow-extension",
      // 入口文件
      // input: {
      //   system: "/src/projects/system/index.html",
      //   vueApp: "/src/projects/vueApp/index.html",
      // },
      // },
      outDir: `${curProjectConfig.outDir}`,
    },
    optimizeDeps: {
      exclude: ["__INDEX__"], // 排除 __INDEX__
    },
    server: {
      open: "/",
      port,
    },
  };
});
