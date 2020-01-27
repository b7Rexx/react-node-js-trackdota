const multer = require('multer');
const path = require('path');

const multer_temp_path = path.join(__dirname, '../../files/temp_multer');
const storage = multer.diskStorage({
  destination: multer_temp_path,
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

module.exports = {
  multer,
  upload,
  multer_temp_path
};
