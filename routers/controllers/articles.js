const articles = require("../../db/models/articles");


const createNewArticle = (req, res) => {
    const { title, description, author } = req.body;

    const newUser = new articles({
        title,
        description,
        author,
    });

    newUser
        .save()
        .then((article) => {
            const sussessAdded = {
                success: true,
                message: "Success Artical created",
                article
            }
            res.status(201);
            res.json(sussessAdded);
        })
        .catch((err) => {
            const errorAdded = {
                success: false,
                message: "server error",
            }
            res.status(500);
            res.json(errorAdded);
        });
};

const getAllArticles = (req, res) => {
    articles.find({})
        .then((articles) => {
            const allArticles = {
                success: true,
                message: 'all the articles',
                articles
            }
            res.status(200);
            res.json(allArticles);
        })
        .catch((err) => {
            const error = {
                success: false,
                message: "server error"
            }
            res.status(500);
        });


}
module.exports = { createNewArticle, getAllArticles };