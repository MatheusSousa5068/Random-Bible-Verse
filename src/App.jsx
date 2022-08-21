import "./App.css";
import { useState } from "react";
import api from "./api";

function App() {
    const [book, setBook] = useState("");
    const [chapter, setChapter] = useState("");
    const [verse, setVerse] = useState("");

    const getValues = async () => {
        await api
            .get(`/${book}%20${chapter}:${verse}?translation=almeida`)
            .then((response) => {
              console.log(response.data.verses[0].text)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

    };


    return (
        <div className="App">
            <input type="text" onChange={(e) => setBook(e.target.value)} />
            <input type="text" onChange={(e) => setChapter(e.target.value)} />
            <input type="text" onChange={(e) => setVerse(e.target.value)} />

            <button onClick={getValues}>Submit</button>
        </div>
    );
}

export default App;
