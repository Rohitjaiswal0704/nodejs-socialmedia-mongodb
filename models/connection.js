const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/fbDB')
    .then(() => {
        console.log('Connection estabilized!');
    })
    .catch((err) => {
        console.log(err.message);
    })




