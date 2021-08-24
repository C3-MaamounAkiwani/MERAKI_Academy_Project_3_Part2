const express = require("express");
const {
    createNewArticle,
    getAllArticles,
    getArticlesByAuthor,
    updateAnArticleById
} = require('../controllers/articles');

const articlesRouter = express.Router();

articlesRouter.post("/articles", createNewArticle);
articlesRouter.get("/articles", getAllArticles);
articlesRouter.get("/articles/search_1", getArticlesByAuthor);
articlesRouter.put("/articles/:id", updateAnArticleById)



module.exports = articlesRouter;