const git = require("simple-git");

//User credentials
const USER = "sangha-test-candidate2021";
const PASS = "SaSNNfUkuXLKhrxRMvuv";
const REPO = "bitbucket.org/myquestcoteam/candidate-test-nodejs-2021";

//Branch name, enter as argument after node server.js <name>
const branch = process.argv[2];

const remote = `https://${USER}:${PASS}@${REPO}`;
 
//Make call
function makeCall() {
  return new Promise((resolve) => {
    resolve(
      git()
        .silent(true)
        .clone(remote, ["-b", branch])
        .then(() => console.log(`Repo Branch: ${branch} cloned`))
        .catch((err) => console.error("Failed: ", err))
    );
  });
}

module.exports = {makeCall, branch}