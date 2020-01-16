const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/joker_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log("Connected to database! Success!"))
    .catch(err => console.log("data base error", err))