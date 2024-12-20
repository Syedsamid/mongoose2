import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 5,
    },
    lastname: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 5,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    }
});

const userModel = mongoose.model("Users",userSchema,"users");

export default userModel;