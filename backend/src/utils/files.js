const path = require('path');
const fs = require('fs');
/**
 * remove all files in folder
 * @type {string}
 */
removeFilesFromFolder = (folder_path) => {
  fs.readdir(folder_path, (err, files) => {
    // if (err) throw err;
    for (const file of files) {
      fs.unlink(path.join(folder_path, file), err => {
        // if (err) throw err;
      });
    }
  });
};

moveFile = (old_path, new_path) => {
  fs.rename(old_path, new_path, (err) => {
    if (err) throw err;
  });
};

module.exports = {
  removeFilesFromFolder,
  moveFile
};
