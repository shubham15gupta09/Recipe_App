const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

app
    .use(express.static('public'))
    .set('view engine', 'ejs')
    .use(bodyParser.json({}))
    .get("/", (req, res) => {
        res.status(200).render("home.ejs");
    })
    .listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}/`);
    });