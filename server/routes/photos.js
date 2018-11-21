var express = require('express');
var router = express.Router();
var photoController = require('../controllers/photoController');
var flash = require('connect-flash');
// image storage filter & file data configurtion
var multer = require('multer');
var imageStorage = require('../services/imageStorage');
var upload = multer({ storage: imageStorage.storage, fileFilter: imageStorage.imageFilter });

// flash messaging
router.use(flash());

// list photos
router.get('/', photoController.list);

// find photo
router.get('/:photoid', photoController.read);

// save new photo
router.post('/', upload.single('image'), photoController.create);

// update photo info
router.post('/:photoid', photoController.update);

// delete photo
// still use post method on the form, but tie it to delete function in controller
router.post('/delete/:photoid', photoController.delete);

//error handling
router.use(function(err, req, res, next) {
    console.error(err.stack);
    if (err.message = "OnlyImageFilesAllowed") {
        req.flash('fileUploadError', "Please select an image file with a jpg, png or gif filename.");
        res.redirect('/express');
    } else if (err.message = "PhotoSaveError") {
        req.flash('PhotoSaveError', "There is a problem saving photos.");
        res.redirect('/express');
    } else {
        next(err);
    }

})

module.exports = router;