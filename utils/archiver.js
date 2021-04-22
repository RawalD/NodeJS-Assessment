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

  // return new Promise((resolve) => {
  //   resolve(
  //     archive.pipe(output),
  //     archive.directory(
  //       path.join(__dirname, "../candidate-test-nodejs-2021/"),
  //       false
  //     ),
  //     archive.directory("subdir/", "new-subdir"),
  //     archive.finalize()
  //   );
  // });

  return new Promise((resolve, reject) => {
    archive
      .directory(path.join(__dirname, "../candidate-test-nodejs-2021/"), false)
      .on('error', err => reject(err))
      .pipe(output)
    ;

    output.on('close', () => resolve());
    archive.finalize();
  });
}

module.exports = makeZip;
