const router = require("express").Router();
const appointment = require("../model/appointment");

router.post("/add", async (req, res) => {
    try {

        const {name, phone, email, date} = req.body
        //create new appointment
        const newAppointment = new appointment({
            name,
            email,
            phone,
            date
        });

        //save appointment and send response
        const user = await newAppointment.save();
        res.status(200).json({
            status: 1,
            message: "appointment added",
            newAppointment: user
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 0,
            message: "Failed to add",
            err: err.message
        });
    }
});

module.exports = router;