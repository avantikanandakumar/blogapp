const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    title: String,
    description: String,
    ImageURL : String
   
})
const blogModel = mongoose.model('blog', blogSchema);
module.exports = blogModel;