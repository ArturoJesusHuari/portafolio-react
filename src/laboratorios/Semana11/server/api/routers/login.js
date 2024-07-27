const express = require('express');
const routerLogin = express.Router();
const jwt = require('jsonwebtoken');

const {getClientUserData} = require('../../data/CRUD.js')

const secret_key = 'secret_key';
// Ruta de inicio de sesión
routerLogin.post('/', (req, res) => {
  const { username } = req.body;
  const user = getClientUserData(username);
  console.log(username )
  if (user) {
    const token = jwt.sign({ username }, secret_key, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Credenciales inválidas');
  }
});
module.exports = routerLogin;