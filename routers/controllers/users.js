const users = require("../../db/models/users");


const createNewAuthor = (req, res) => {
    const { firstName, lastName, age, country, email, password } = req.body;

    const newUser = new users({
        firstName,
        lastName,
        age,
        country,
        email,
        password,
    });

    newUser
        .save()
        .then((author) => {
            const sussessAdded = {
                success: true,
                message: "Success Author Added",
                author
            }
            res.status(200);
            res.json(sussessAdded);
        })
        .catch((err) => {
            const errorAdded = {
                success: false,
                message: "The email already exists",
            }
            res.status(409);
            res.json(errorAdded);
        });
};

module.exports = { createNewAuthor };