const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // o tu contraseña de MySQL
  database: 'viajaseguro_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

module.exports = db;
