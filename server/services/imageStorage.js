var multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/img');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    }
});

// ensure the upload is an image 
const imageFilter = function(req, file, cb) {
    if (file.originalname.match(/\.(jpg|jpeg|png|PNG|gif)$/)) {
        cb(null, true);
    } else {
        cb(new Error("onlyImageFilesAllowed"), false);
    }
};

module.exports.storage = storage;
module.exports.imageFilter = imageFilter;