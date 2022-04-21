const projectName = process.argv[2];
const projectConfig = require("./projectConfig");
const exec = require("child_process").execSync;
if (projectName) {
  exec("pnpm vite --mode dev -- -- --PROJECT_NAME=" + projectName, {
    stdio: "inherit",
  });
} else {
  Object.keys(projectConfig).forEach((project) => {
    const exec = require("child_process").execSync;
    exec(
      "start cmd.exe /K pnpm vite --mode dev -- -- --PROJECT_NAME=" + project,
      {
        stdio: "inherit",
      }
    );
  });
}
