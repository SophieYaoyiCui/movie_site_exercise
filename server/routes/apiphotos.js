var express = require('express');
var router = express.Router();
var api = require('../controllers/apiController');
// image storage filter & file data configurtion
var multer = require('multer');
var imageStorage = require('../services/imageStorage');
var upload = multer({ storage: imageStorage.storage, fileFilter: imageStorage.imageFilter });

//Cross Origin Resource Sharing
router.use((req, res, next) => {
    res.set({
        // Allow AJAX access from any domain
        'Access-Control-Allow-Origin': '*',
        // Allow methods and headers for 'preflight'
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
        //'Content-Type': 'application/json'
    });

    // if this is a preflight, we're done and can send the response with our headers
    if (req.method == 'OPTIONS') {
        return res.status(200).end();
    }
    next();
})

// photos - list
router.get('/', api.list)

// photos - find
router.get('/:photoid', api.read)

// create
router.post('/', upload.single('image'), api.create);

// update
router.put('/:photoid', api.update);

// photos delete

router.delete('/:photoid', api.delete);

// export our router
module.exports = router;