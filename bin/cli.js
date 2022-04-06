#!user/bin/env node

const { execSync } = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}
const repoName = process.env[2];
const gitCheckoutCmd = `git clone --depth 1 https://github.com/hardikhari96/Paribhas.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Creating project ${repoName}`);
const checkedOut = runCommand(gitCheckoutCmd);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps); process.exit(-1)

console.log("Congratulations! You are Ready. Follow the following command to start");
console.log(`cd ${repoName} && npm start`)


