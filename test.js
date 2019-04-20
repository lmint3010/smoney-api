var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = new Schema({ name: String, type: String });

// assign a function to the "methods" object of our animalSchema
animalSchema.methods.findSimilarTypes = function(cb) {
  return this.model('Animal').find({ type: this.type }, cb);
};

var Animal = mongoose.model('Animal', animalSchema);
var dog = new Animal({ type: 'dog' });

dog.findSimilarTypes(function(err, dogs) {
    console.log('1111')
  console.log(dogs); // woof
});
console.log('haha')