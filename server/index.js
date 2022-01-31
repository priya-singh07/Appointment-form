const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => 
    console.log("MongoDB Connected")
)
.catch(err => console.log(err));

app.get('/', (req,res) => {
    res.send('App is running')
})

app.post('/appointment', require('./routes/appt'));

app.listen(8800, () => {
    console.log("backend server is running!");
});