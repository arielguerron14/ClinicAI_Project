const connection = require('../models/db');

module.exports.ping = (req,res) =>{
    const query = 'SELECT * FROM login';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error ejecutando la consulta:', err);
            return res.status(500).send('Error en la base de datos');
        }

        console.log(results);
        res.json(results);
    });
};