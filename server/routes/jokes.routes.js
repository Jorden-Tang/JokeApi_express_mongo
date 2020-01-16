const JokesController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/jokes", JokesController.findAllJokes);
    app.get("/random_joke", JokesController.randomJoke);
    app.post("/jokes", JokesController.createNewJoke);
    app.put("/jokes/:id", JokesController.updateExistingJoke);
    app.delete("/jokes/:id", JokesController.deleteJoke);
}