"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Knex = require("knex");
const Bookshelf = require("bookshelf");
class DatabaseConfig {
    static bookshelf() {
        DatabaseConfig._bookshelf.plugin('registry');
        return DatabaseConfig._bookshelf;
    }
}
DatabaseConfig._knex = Knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'ra_user',
        password: 'rapw4114',
        database: 'radb',
        charset: 'utf8'
    }
});
DatabaseConfig._bookshelf = Bookshelf(DatabaseConfig._knex);
exports.DatabaseConfig = DatabaseConfig;
//# sourceMappingURL=database.js.map