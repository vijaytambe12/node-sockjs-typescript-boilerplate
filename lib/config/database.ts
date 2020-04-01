import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

export class DatabaseConfig {

    private static _knex:Knex = Knex({
        client: 'mysql',
        connection: {
            host     : 'localhost',
            user     : 'ra_user',
            password : 'rapw4114',
            database : 'radb',
            charset  : 'utf8'
        }
    });

    private static _bookshelf:Bookshelf = Bookshelf(DatabaseConfig._knex);

    public static bookshelf(): Bookshelf {
        DatabaseConfig._bookshelf.plugin('registry');
        return DatabaseConfig._bookshelf;
    }
}
