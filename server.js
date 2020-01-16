const express = require("express");
const app = express();
const mongoose = require('mongoose')
require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({extended: true}));
const AllJokeRoutes = require("./server/routes/jokes.routes");
//attach current app to the routes
AllJokeRoutes(app);

const server = app.listen(8000, () => console.log(`The server is running on ${server.address().port}`))