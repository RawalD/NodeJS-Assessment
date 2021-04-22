//Modules
const archiver = require("archiver");
const fs = require("fs");

//Locals
const packagedModules = require("./packagedModules");
const { branch } = require("./getRepo");
const path = require("path");
const { resolve } = require("path");

const archive = archiver("zip");

async function makeZip() {
  await packagedModules();
  
  const output = fs.createWriteStream(`${branch}.zip`);
  return new Promise((resolve) => {
    output.on(
      "close",
      function () {
        console.log(archive.pointer() + " total bytes");
        console.log(
          "archiver has been finalized and the output file descriptor has closed."
        );
      },
      archive.pipe(output),
      archive.directory(
        path.join(__dirname, "../candidate-test-nodejs-2021"),
        false
      ),
      archive.directory("subdir/", "new-subdir"),
      archive.finalize()
    );
  });

}

module.exports = makeZip;
