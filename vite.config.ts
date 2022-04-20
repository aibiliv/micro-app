import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";
import projectConfig from "./config/projectConfig";

// 当前项目名
const projectName = process.argv[5].split("=")[1];
// 当前项目的配置
const curProjectConfig = projectConfig[projectName];

const transformIndexHtml = (code: string) => {
  return code.replace(/__INDEX__/, `${curProjectConfig.entry}`);
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let env = loadEnv(mode, process.cwd());
  let port = env[`VITE_APP_${projectName.toLocaleUpperCase()}_PORT`]; //当前项目的端口号
  return {
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
    optimizeDeps: {
      exclude: ["__INDEX__"], // 排除 __INDEX__
    },
    server: {
      open: "/",
      port,
    },
  };
});
