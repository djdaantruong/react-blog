const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Djdaan:abc1234@react-blog.g9qch.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=> console.log('DB connected'))
  .catch(err => console.error(err));

app.get('/', (req, res)=> {
    res.send('hello world');
});

app.listen(5000);