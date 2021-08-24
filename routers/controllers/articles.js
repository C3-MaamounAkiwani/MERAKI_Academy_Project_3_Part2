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
                articles: articles
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
            res.json(error);
        });


}


const getArticlesByAuthor = (req, res) => {
    articles.find({ author: req.query.author })

    .then((result) => {
            const viewAllArticles = {
                sussess: true,
                message: `all the articles for the author ${req.query.author}  =>`,
                articals: result
            }
            res.status(200);
            res.json(viewAllArticles);
        })
        .catch((err) => {
            const notFound = {
                sussess: false,
                message: `The Author ${req.query.author} Not Found`
            }

            res.status(500);
            res.json(notFound);
        })

}


const updateAnArticleById = (req, res) => {

    id = req.params.id;
    const { title, description } = req.body;
    articles.where({ _id: id }).updateOne({ title, description }).exec().then(
            (result) => {
                const sussessUpdate = {
                    success: true,
                    message: `Success articals updated`,
                    articals: result
                }
                res.json(sussessUpdate);
            })
        .catch((err) => {
            res.json(err);
        })
}

module.exports = { createNewArticle, getAllArticles, getArticlesByAuthor, updateAnArticleById };