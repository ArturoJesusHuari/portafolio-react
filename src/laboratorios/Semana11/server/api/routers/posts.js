const express = require('express');
const routerPosts = express.Router();

const {readData, writeData, getClientUserData} = require('../../data/CRUD.js')
const authenticateToken = require('../auth/auth.js')

// Ruta protegida para obtener publicaciones
routerPosts.get('/', authenticateToken, (req, res) => {
  const data = readData();
  const postsWithUsers = data.posts.map(post => {
    const user = data.users.find(u => u.id == post.userId);
    return {
      userId: post.userId,
      id: post.id,
      title: post.title,
      body: post.body,
      username: user.username,
      email: user.email
    };
  });
  res.json(postsWithUsers);
});

// Ruta para crear una nueva publicación
routerPosts.post('/', authenticateToken, (req, res) => {
  const { title, body } = req.body;
  const posts = readData().posts 
  const id = posts[posts.length - 1].id

  const newPost = {
    userId: getClientUserData(req.user.username).id,
    id: parseInt(id),
    title,
    body
  };
  
  const data = readData();
  data.posts.push(newPost);
  writeData(data);
  res.status(201).json(newPost);
});

// Ruta para actualizar una publicación
routerPosts.put('/', authenticateToken, (req, res) => {
  const { post } = req.body;
  const { id, title, body } = post;
  const data = readData();
  const index = data.posts.findIndex(p => p.id == parseInt(id) && p.userId == getClientUserData(req.user.username).id);
  if (index != -1) {
    data.posts[index] = { ...data.posts[index], title, body };
    writeData(data);
    res.json(data.posts[index]);
  } else {
    res.status(404).send('Publicación no encontrada');
  }
});

// Ruta para eliminar una publicación
routerPosts.delete('/:id', authenticateToken, (req, res) => {
  const postId = parseInt(req.params.id);
  const data = readData();
  const index = data.posts.findIndex(p => p.id == postId);
  if (index !== -1) {
    const deletedPost = data.posts.splice(index, 1);
    writeData(data);
    res.json(deletedPost);
  } else {
    res.status(404).send('Publicación no encontrada');
  }
});

// Ruta para obtener posts propios
routerPosts.get('/mine', authenticateToken, (req, res) => {
  const posts = readData().posts.filter(post => post.userId == getClientUserData(req.user.username).id)
  const data = readData();
  const postsWithUsers = posts.map(post => {
    const user = data.users.find(u => u.id == post.userId);
    return {
      userId: post.userId,
      id: post.id,
      title: post.title,
      body: post.body,
      username: user.username,
      email: user.email
    };
  });
  res.json(postsWithUsers);
});
module.exports = routerPosts;