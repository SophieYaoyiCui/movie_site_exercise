var Photo = require('../models/photoModel');
var PhotoService = {};

//  list
PhotoService.list = (searchParams) => {
    return Photo.find(searchParams)
        .then((photos) => {
            // found
            return photos;
        })
}

//  find
PhotoService.read = (id) => {
    // user mongoose method .findById
    return Photo.findById(id)
        .then((photo) => {
            // found
            return photo;
        })
}

//  create
PhotoService.create = (obj) => {
    var photo = new Photo(obj);
    // user mongoose method .save
    return photo.save();
}

//  update
PhotoService.update = (id, data) => {
    return Photo.findById(id)
        .then((photo) => {
            photo.set(data);
            photo.save();
            return photo;
        })
}

//  delete
PhotoService.delete = (id) => {
    return Photo.remove({ _id: id })
        .then((obj) => {
            return obj;
        })
}

module.exports = PhotoService;