const express = require("express");
const users = require("./db/models/users");
const article = require("./db/models/articles");
const commit = require("./db/models/comments");
const db = require("./db/db");
const userRouter = require('./routers/routes/users');
const articleRouter = require('./routers/routes/articles');
const { application } = require("express");

const app = express();
app.use(express.json());


app.use('/', userRouter);
app.use('/', articleRouter);
app.use('/login', userRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});