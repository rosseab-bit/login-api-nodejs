const express = require("express");
const jwt = require('jsonwebtoken');
const ManageDB = require('./database_package/manageDB');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Express server: PORT 5000');
});


app.post('/api/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body);
  if (username != "admin" || password != 1234){
    res.send({ msg: 'invalid credentials'})
  }
  jwt.sign({ username: username }, process.env.SECRET_KEY, (err, token) => {
    if (err) {
      res.status(400).send({ msg: 'Error login' })
    }
    else {
      res.send({ login: 'success', token: token })
    }
  })
})


app.post('/api/verify', (req, res) => {
  console.log('token head', req.headers.token);
  const token = req.headers.token;
  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    if(verified){
      res.send({'token':'success'})
    }
  } catch {
    res.send({'token':'invalid'})
  }
  //const verified = jwt.verify(token, process.env.SECRET_KEY);

//  if (verified){
//    console.log('Token Valido');
//  }else{
//    console.log('Token invalido');
//  }
//  res.send({'token':'success'})
})

app.listen(5000, () => {
  console.log("El servidor está inicializado en el puerto 5000");
});