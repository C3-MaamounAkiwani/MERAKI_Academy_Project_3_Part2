const express = require("express");
const {
    createNewAuthor,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/users');

const userRouter = express.Router();

userRouter.post("/users", createNewAuthor);

module.exports = userRouter;