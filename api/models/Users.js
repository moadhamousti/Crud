const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    enrollnumber: {
        type: String,
        required: true
    },
    dateofadmission: {
        type: Date,
        required: true
    },
});

const UserModel = mongoose.model("User", UserSchema); // Assuming you want the collection name to be "users"
module.exports = UserModel;
