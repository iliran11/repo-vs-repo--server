const requiredString = {
    type: String,
    required: true
}
const mongoose = require('mongoose')
const repositorySchema = mongoose.Schema({
    repositoryId: requiredString,
    fullName: requiredString,
    description: String,
    htmlUrl: requiredString,
    stars: Number
})
repositorySchema.methods.addStarsData = function addStarsData(stars) {
    debugger;
}
// AnimalSchema.methods.findSimilarType = function findSimilarType (cb) {
//     return this.model('Animal').find({ type: this.type }, cb);
//   };
module.exports = mongoose.model('Repository', repositorySchema)