const express = require('express');
const router = express.Router();
const db = require('../db');

// Registro
router.post('/register', (req, res) => {
  const { first_name, last_name, email, password, birthdate, id_number } = req.body;
  const sql = `INSERT INTO users (first_name, last_name, email, password, birthdate, id_number) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(sql, [first_name, last_name, email, password, birthdate, id_number], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Usuario registrado exitosamente' });
  });
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length > 0) {
      res.json({ message: 'Login exitoso', user: results[0] });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  });
});

module.exports = router;
