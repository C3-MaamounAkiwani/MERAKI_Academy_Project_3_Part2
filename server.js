const express = require("express");
const users = require("./db/models/users");
const article = require("./db/models/articles");
const db = require("./db/db");
const userRouter = require('./routers/routes/users');
const articleRouter = require('./routers/routes/articles');
const { application } = require("express");

const app = express();
app.use(express.json());
app.use('/', userRouter);
app.use('/', articleRouter);
app.use('/', articleRouter);
app.use('/search_1/:author', articleRouter);
app.use('/search_2/:id', articleRouter);
app.use('/', articleRouter);
app.use('/', articleRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});