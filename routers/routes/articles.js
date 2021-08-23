const express = require("express");
const {
    createNewArticle,
    updateTodo,
    deleteTodo
} = require('../controllers/articles');

const articlesRouter = express.Router();

articlesRouter.post("/articles", createNewArticle);

//todoRouter.post("/create/todo", createTodo);
//todoRouter.put("/update/todo", updateTodo);
//todoRouter.delete("/delete/todo", deleteTodo);

module.exports = articlesRouter;