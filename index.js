const express = require("express");
const app = express();

const api = require("./api");

const books = require("./books.json");

app.use(express.json());

app.get("/", async (req, res) => {
    let randomBook = await Math.floor(Math.random() * 66 + 1);
    let book = await books[randomBook];

    let randomChapter = await Math.floor(Math.random() * book.chapters + 1);

    await api
        .get(`/${book.name}%20${randomChapter}`)
        .then((response) => {
            let randomVerse = Math.floor(
                Math.random() * response.data.verses.length + 1
            );
            console.log(book.name, randomChapter);
            console.log(randomVerse);
            console.log(response.data.verses[randomVerse - 1]);

            res.json(response.data.verses[randomVerse - 1]);
        })
        .catch((err) => {
            res.send("Algo deu errado");
        });
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });