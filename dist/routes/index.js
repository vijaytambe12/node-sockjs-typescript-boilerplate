"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movieController_1 = require("../controller/movieController");
class Routes {
    constructor() {
        this.movieController = new movieController_1.MovieController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        app.route('/movie')
            // GET endpoint
            .get((req, res) => {
            // Get all Movies
            this.movieController.addNewMovie(req, res);
        })
            // POST endpoint
            .post((req, res) => {
            // Create new movie
        });
        app.route('/movie/:id')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET Request Successfull for movie by id'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map