const express = require('express');
const db = require('./models');
require('dotenv').config();

const app = express();

//router
const userRouter = require('./routers/user');
const blogRouter = require('./routers/blog');
const commentRouter = require('./routers/comment');

//middle ware
app.use(express.json());

//connect to database
db.sequelize.sync().then(() => {
    console.log('Connect success to MySQL')
    app.listen(process.env.PORT, () => {
        console.log(`Listen to port ${process.env.PORT}....`)
    })
})

app.use('/auth', userRouter);
app.use('/blogs', blogRouter);
app.use('/comments', commentRouter);
