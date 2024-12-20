import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        maxlength: 10,
        minlength: 3,
    },
    lastname: {
        type: String,
        require: true,
        maxlength: 10,
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
    }
});

const adminModel = mongoose.model("Admin",adminSchema,"admin");

export default adminModel;