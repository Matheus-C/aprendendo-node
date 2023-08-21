const mongo = require("mongoose");

const user_schema = new mongo.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
});

const UserModel = mongo.model("User", user_schema);

module.exports = UserModel;