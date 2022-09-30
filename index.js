const api = require("./api")

const books = require('./books.json')

// Exemplo de sintaxe
const gerar = async () => {
    let randomBook = Math.floor(Math.random() * 66 + 1);
    let book = books[randomBook]



    let randomChapter = Math.floor(Math.random() * book.chapters + 1);


    await api
        .get(`/${book.name}%20${randomChapter}`)
        .then((response) => {
            let randomVerse = Math.floor(Math.random() * response.data.verses.length + 1);
            console.log(book.name, randomChapter)
            console.log(randomVerse)
            console.log(response.data.verses[randomVerse - 1])
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

};

gerar()