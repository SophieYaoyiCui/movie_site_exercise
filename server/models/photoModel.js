var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
	originalname: {type: String, required:true},
  	mimetype: {type: String, required:true},
  	filename: {type: String, required:true},
  	imageurl: {type: String, required:true},
  	description: {type: String, required:false},
  	title: {type: String, required:true}, 
  	resort: {type: String, required:true}, 
  	date: {type: Date, required:false},
  	size: {type: String, required:false},
  	createdat: {type: Date, required: false},
  	updatedat: {type: Date, required: false}
});

schema.pre('save',function(next){
	if(!this.createdat){
		this.createdat = new Date();
	} else {
		this.updatedat = new Date();
	}
	next();
});

module.exports = mongoose.model("Photo", schema);