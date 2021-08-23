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


module.exports = { createNewArticle, getAllArticles };