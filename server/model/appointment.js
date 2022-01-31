const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        require: true,
        max: 50,
    },
    phone: {
        type: String,
        require: true,
        min: 10,
        max: 10,
    },
    date: {
        type: Date,
        require: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Appointments", AppointmentSchema);