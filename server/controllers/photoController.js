var log = require('log-util');
var flash = require('connect-flash');

// all methods are in PhotoService
var PhotoService = require('../services/PhotoService');
var PhotoController = {};

// list
PhotoController.list = (req, res) => {
    PhotoService.list({})
        .then((photos) => {
            res.render('photos', {
                photos: photos,
                flashMsg: req.flash("fileUploadError")
            });
        })
        .catch((err) => {
            log.error(`Listing Photos error: ${err}`);
            res.end('Listing Photos error.');
        });
};

// find
PhotoController.read = (req, res) => {
    PhotoService.read({ '_id': req.params.photoid })
        .then((photo) => {
            res.render('updatephoto', {
                photo: photo,
                flashMsg: req.flash("photoFindError")
            });
        })
        .catch((err) => {
            log.error(`Reading Photos error: ${err}`);
            res.end('Reading Photos error.');
        });
};



// save
PhotoController.create = (req, res) => {
    var path = '/static/img/' + req.file.filename;
    var photo = {
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        filename: req.file.filename,
        imageurl: path,
        description: req.body.description,
        resort: req.body.resort,
        title: req.body.title,
        date: req.body.date,
        size: req.file.size / 1024 | 0
    };

    PhotoService.create(photo)
        .then(() => {
            res.redirect('/express');
        })
        .catch((err) => {
            log.error(`Creating Photos error: ${err}`);
            res.end('Creating Photos error.');
        });
};

// update
PhotoController.update = (req, res) => {
    let putdata = req.body;
    PhotoService.update(req.params.photoid, putdata)
        .then((photo) => {
            var data = {
                title: req.body.title,
                description: req.body.description,
                resort: req.body.resort,
                date: req.body.date
            }

            photo.set(data);
            photo.save().then(() => {
                res.redirect('/express');
            });
        })
        .catch((err) => {
            log.error(`Updating Photos error: ${err}`);
            res.end('Updating Photos error.');
        });
};

// delete
PhotoController.delete = (req, res) => {
    PhotoService.delete(req.params.photoid)
        .then((photo) => {
            //res.json({ message: 'Deleted' });
            res.redirect('/express');
        })
        .catch((err) => {
            log.error(`Deleting Photos error: ${err}`);
            res.end('Deleting Photos error.');
        });
};

module.exports = PhotoController;