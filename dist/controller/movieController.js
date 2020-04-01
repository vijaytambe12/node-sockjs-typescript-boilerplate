"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = require("../models/Movie");
class MovieController {
    addNewMovie(req, res) {
        let newMovie = new Movie_1.Movie({ title: "Sholay" });
        newMovie.save().then(succ => {
            res.status(200).send({
                message: "success", data: succ
            });
        }, err => {
            res.status(200).send({
                message: "failure", data: err
            });
        });
    }
}
exports.MovieController = MovieController;
//# sourceMappingURL=movieController.js.map