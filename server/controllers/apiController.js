var PhotoService = require('../services/PhotoService');
var apiController = {};

apiController.list = (req, res) => {
    PhotoService.list()
        .then((photos) => {
            if (photos) {
                res.status(200);
                //res.render('api');
                res.json(photos); //res.send(JSON.stringify(photos));
            } else {
                res.end('No photos found.');
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(404);
            res.end();
        })
};

apiController.read = (req, res) => {
    PhotoService.read(req.params.photoid)
        .then((photo) => {
            if (photo) {
                res.status(200);
                res.json(photo);
            } else {
                res.end('No photo found.');
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(404);
            res.end();
        })
};

apiController.create = async(req, res) => {
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

    try {
        const photoSave = await PhotoService.create(photo);
        res.status(201);
        //res.send(JSON.stringify(photo));
        res.json(photo);
        //console.log("api created a photo");
    } catch (err) {
        console.log(err);
        throw new Error("PhotoSaveError", photo);
        res.end();
    }
};

apiController.update = (req, res) => {
    let putdata = req.body;
    //console.log(req);
    PhotoService.update(req.params.photoid, putdata)
        .then((photo) => {
            res.status(200);
            res.json(photo);
        })
        .catch((err) => {
            res.status(404);
            res.end();
        })
};

apiController.delete = (req, res) => {
    PhotoService.delete(req.params.photoid)
        .then((photo) => {
            res.status(200);
            res.json(photo);
        })
        .catch((err) => {
            res.status(404);
            res.end();
        })
};

module.exports = apiController;