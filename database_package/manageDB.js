const mysql = require('mysql');

class ManageDB {
    constructor() {
        this.connection = mysql.createConnection({
            host: '192.160.0.153',
            user: 'root',
            password: '1234qwer',
            port: 33061,
            database: 'world'
        })
    }

    dbSelect(query) {
        this.connection.connect((err) => {
            if (err) {
                throw err
            };
            console.log('Connected To MySQL Server');
        });

    }
}