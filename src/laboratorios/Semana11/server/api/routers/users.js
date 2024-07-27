const express = require('express');
const jwt = require('jsonwebtoken');
const routerUsers = express.Router();

const {readData, getClientUserData} = require('../../data/CRUD.js')
const authenticateToken = require('../auth/auth.js')

// Ruta para obtener información de usuarios por ID
routerUsers.get('/', authenticateToken, (req, res) => {
  const userId = req.query.userId;
  const data = readData();
  const user = data.users.find(user => user.id == userId);
  if (!user) {
    return res.status(404).send('Usuario no encontrado');
  }
  res.json(user);
});

// Ruta para obtener datos del usuario actual
routerUsers.get('/data', authenticateToken, (req, res) => {
  const user = getClientUserData(req.user.username);
  res.json(user);
});
module.exports = routerUsers;