const express = require("express");
const {
    createNewAuthor,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/users');

const userRouter = express.Router();

userRouter.post("/users", createNewAuthor);
//todoRouter.post("/create/todo", createTodo);
//todoRouter.put("/update/todo", updateTodo);
//todoRouter.delete("/delete/todo", deleteTodo);

module.exports = userRouter;