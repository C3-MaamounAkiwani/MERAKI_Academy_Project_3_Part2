const express = require("express");
const {
    createNewArticle,
    getAllArticles,
    updateTodo,
    deleteTodo
} = require('../controllers/articles');

const articlesRouter = express.Router();

articlesRouter.post("/articles", createNewArticle);
articlesRouter.get("/articles", getAllArticles);
//todoRouter.post("/create/todo", createTodo);
//todoRouter.put("/update/todo", updateTodo);
//todoRouter.delete("/delete/todo", deleteTodo);

module.exports = articlesRouter;