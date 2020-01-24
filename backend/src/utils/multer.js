const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../files'),
  filename: function (req, file, cb) {
    /**
     * random file name for uniqueness
     */
    cb(null, Date.now() + '_' + Math.floor(Math.random() * 1000000) + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {fileSize: 1000000},
});

module.exports = upload;
