const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    shortId :{
        type : String,
        required : true,
        unique : true
    },
    redirectUrl :{
        type : String,
        required : true,
    },
    visetedHistory :[{ timestamp : {type : Number}}],
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }

},{timestamps : true});

const URL = mongoose.model('url',userSchema);

module.exports = URL;