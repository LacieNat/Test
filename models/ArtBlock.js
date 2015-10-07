var mongoose = require('mongoose');

var artSchema = new mongoose.Schema({
	title: String,
	type: String
});

artSchema.statics.findSimilarTypes = function(type, cb) {
	return this.find({type: type}, cb);
}

var ArtBlock = mongoose.model('ArtBlock', artSchema );

var ab = new ArtBlock({title: "hello", type: "ab"});
ab.save();
