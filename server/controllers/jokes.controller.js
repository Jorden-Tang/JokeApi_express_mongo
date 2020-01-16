const Joke = require('../models/jokes.model');

module.exports = {
    createNewJoke(req,res){
        console.log(req.body)
        Joke.create(req.body)
            .then((newJoke) => res.json({joke: newJoke}))
            .catch((err) => res.json({message: "error when creating joke", error: err}))
    },
    findOneJoke(req, res){
        Joke.findById({_id: req.params.id})
            .then(oneJoke => res.json(oneJoke))
            .catch(err => res.json({message: "errors when try to find one by id", error: err}))
    },
    findAllJokes(_req, res){
        Joke.find()
            .then(allJokes => res.json({allJokes: allJokes}))
            .catch(err => res.json({message: "errors when getting all jokes", error: err}))
    },
    updateExistingJoke(req, res){
        Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(updatedJoke => res.json({joke: updatedJoke}))
            .catch(err => res.json({message: "errors when update joke", error: err}))
    },
    deleteJoke (req, res){
        Joke.deleteOneJoke({_id: req.params.id})
            .then(result => req.json({result: result}))
            .catch(err => res.json({message: "errors when deleteing a joke", error: err}))
    },
    randomJoke(req, res){
        Joke.aggregate({$sample: 1})
            .then(randomJoke => req.json({randomJoke: randomJoke}))
            .catch(err => res.json({message: "errors when getting a random joke", error: err}))
    }
}





