const mongoose = require("mongoose");
const studentmodel = require("./studentmodel");

const Schema = mongoose.Schema;

const complaintSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    category: {
        type: String,
        required: true,
    },

    hostel: {
        type: String,
        required: true,
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    }],
});

module.exports = mongoose.model("Complaint", complaintSchema);
