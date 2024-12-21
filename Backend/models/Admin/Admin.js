import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 3,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    profession: {
        type: String,
        require: true,
        maxlength: 20,
        minlength: 5,
    },
    gender: {
        type: String,
        require: true,
        maxlength: 20,
        minlength: 3,
    },
    address: {
        type: String,
        require: true,
        maxlength: 30,
        minlength: 4,
    }

});

const adminModel = mongoose.model("Admin",adminSchema,"admin");

export default adminModel;