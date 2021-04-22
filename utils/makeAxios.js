const axios = require("axios");
const fs = require('fs');

const path = require('path')
const { pathToFileURL } = require("url");

const zippedFile = require('./archiver')

//Make POST
async function makeAxios(){
  
  await zippedFile()

  console.log("AXIOS!!!")

  user = "sangha-test-candidate";
  pwd = "hkj87H8h^g$fh34";
  ZipPath = path.join(__dirname, '../candidate-test-nodejs-2021/cool/diprawal.zip')

  console.log(ZipPath)

try {

  axios({
    
    method: 'POST',
    url: "https://sangha-test-candidate-nodejs2021.scm.azurewebsites.net/api/zipdeploy",
    headers: {
        'content-type': 'application/zip'
    },
    auth: {
        username: user,
        password: pwd
    },
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    data: fs.createReadStream(ZipPath),
  });
  
} catch (error) {
  console.log('Failed')
}

}

module.exports = {makeAxios}