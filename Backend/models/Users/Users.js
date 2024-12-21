import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        maxlength: 50,
        minlength: 5,
    },
    lastname: {
        type: String,
        require: true,
        maxlength: 50,
        minlength: 5,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    age: {
        type: String,
        require: true,
        unique: true,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
    }
});

const userModel = mongoose.model("Users",userSchema,"users");

export default userModel;