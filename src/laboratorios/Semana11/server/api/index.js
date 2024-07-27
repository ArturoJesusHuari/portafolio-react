//Dependences
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

//Routers
const routerPosts = require('./routers/posts.js')
app.use('/posts',routerPosts);
const routerUsers = require('./routers/users.js')
app.use('/users',routerUsers);
const routerLogin = require('./routers/login.js')
app.use('/login',routerLogin);

const PORT = 4000
app.listen(PORT, () => {
  console.log('Listening on: http://localhost:4000');
});