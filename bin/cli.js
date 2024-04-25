#!/usr/bin/env node

import { execSync } from 'child_process';
const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.log(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone https://www.npmjs.com/package/create-frontend-react-ts ${repoName}`;
const installDeps = `cd ${repoName} && npm install`;
console.log(`Cloning the repository with the name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);

const installedDeps = runCommand(installDeps);
if (!installDeps) process.exit(-1);
console.log(
  "You app has been sucessfully created. Run following command to start the server"
);
console.log(`cd ${repoName} && npm run dev`);
