const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: {
        type: String,
        require: true
    },
    genre:  {
        type: String,
        require: true
    },
    description: {
        type:String,
        require: true
    },
    date:  {
        type: Date,
        default: Date.now
    },
})


module.exports = mongoose.model('Post', PostSchema);