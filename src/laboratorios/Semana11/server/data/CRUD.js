const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json'); // Ruta al archivo JSON

const readData = () => {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
};

const getClientUserData = (username) =>{
  const data = readData();
  const users = data.users;
  const user = users.find(u => u.username == username);
  return user;
}

module.exports = {readData, writeData, getClientUserData}