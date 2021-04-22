//Modules
const { resolve } = require('path');
const path = require('path')
const shell = require('shelljs')

//Locals
const {makeCall} = require('./getRepo')

//Make NPM Modules
async function npmInstall(){
  await makeCall();

  const packageFile = path.join(__dirname, '../candidate-test-nodejs-2021/cool');
  shell.cd(packageFile)

  return new Promise((resolve) => {
    resolve(
      shell.exec("npm i"))
      console.log('Modules installed')
     
  });
}


  module.exports = npmInstall