const express = require('express');
const bodyParser = require('body-parser');
const diariesRoute = require('./routes/diariesRoute');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/diaries', diariesRoute);//declaration of the routes. 

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(3000, function () {
  console.log('listening on 3000')
})