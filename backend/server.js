require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const usersRouter = require('./controllers/users')

const connection = require('./db')
connection();


app.use(bodyParser.json());
app.use('/users', usersRouter);

// app.get('/', (req, res) => {
//     res.send("hello world");
// })

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});