const mongoose = require("mongoose");

const db = mongoose.createConnection("http://localhost:27017/user", {useNewUrlParser: true, useUnifiedTopology: true});


const schema = mongoose.Schema({
    user_id: String,
    uname: String,
    profile_image: String,
    last_update: Number
})

const model = db.model('userProfile', schema);

module.exports = model;
