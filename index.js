const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { User } = require('./models/user');

const app = express();

mongoose.connect('mongodb+srv://Djdaan:abc1234@react-blog.g9qch.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=> console.log('DB connected'))
  .catch(err => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res)=> {
    res.send('hello world');
});

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, userDate) => {
        if (err) return res.json({ success: false, err});
        return res.status('200').json({ 
            success: true
        });
    });
    
});

app.listen(5000);