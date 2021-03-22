/* eslint-disable */

// Each time you download an exercise, exercism also downloads configuration
// files which (package.json, etc.)
//
// I don't need these files because I have all my configuration files in the
// root directory.
//
// This tool automatically downloads an exercise from Exercism and then removes
// unwanted files.

const { execSync } = require("child_process");

const arg = process.argv;

// Shorthands for available tracks
const tracks = {
  js: "javascript",
  ts: "typescript",
};

// Exercise name - first argument
const exercise = arg[2];
// Track of the exercise - second argument
const track = tracks[arg[3]];

// Download thee exercise using `exercism download`
execSync(`exercism download --exercise=${exercise} --track=${track}`);

const exercisePath = `${track}/${exercise}`;

// Stage downloaded files - this step is required to make the git aware of new
// directory, so it can perform next step
execSync(`git add ${exercisePath}`);

// Remove unwanted files
execSync(`git clean -fXd -- ${exercisePath}/`);

// Commit newly downloaded exercise
execSync(
  `git commit -m "Download new exercise: ${exercise} (${track})" ${exercisePath}`
);
