const express = require("express");
const todoModel = require("./db/models/users");
const db = require("./db/db");
const userRouter = require('./routers/routes/users');

const app = express();
app.use(express.json());

app.use('/', userRouter);


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});