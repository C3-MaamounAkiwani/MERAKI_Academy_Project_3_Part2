const express = require("express");
const {
    createNewArticle,
    getAllArticles,
    getArticlesByAuthor,
    getAnArticleById,
    updateAnArticleById,
    deleteArticleById
} = require('../controllers/articles');

const articlesRouter = express.Router();

articlesRouter.post("/articles", createNewArticle);
articlesRouter.get("/articles", getAllArticles);
articlesRouter.get("/articles/search_1", getArticlesByAuthor);
articlesRouter.get("/articles/search_2", getAnArticleById);
articlesRouter.put("/articles/:id", updateAnArticleById)



module.exports = articlesRouter;