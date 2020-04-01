"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
class Movie extends database_1.DatabaseConfig.bookshelf().Model {
    get tableName() {
        return "movie";
    }
    get Id() {
        return this.get('id');
    }
    set Id(value) {
        this.set({ id: value });
    }
    get title() {
        return this.get('tile');
    }
    set title(value) {
        this.set({ title: value });
    }
}
exports.Movie = Movie;
//# sourceMappingURL=Movie.js.map