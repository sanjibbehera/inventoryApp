const pgp = require('pg-promise')({

    query: e => {

        console.log(`QUERY: `, e.query)
    }

});

const options = {
    host: 'localhost',
    database: 'inventorydb',
    user: 'sanjib',
    password: 'Sanjib1982'
}

// make a connection to the database, specified by the options object
const db = pgp(options);

module.exports = db;