import "./App.css";
import { useState } from "react";
import api from "./api";

function App() {
    const [book, setBook] = useState("");
    const [chapter, setChapter] = useState("");
    const [verse, setVerse] = useState("");
    const [result, setResult] = useState("");

    return (
        <div className="App">
            <input type="text" onChange={(e) => setBook(e.target.value)} />
            <input type="text" onChange={(e) => setChapter(e.target.value)} />
            <input type="text" onChange={(e) => setVerse(e.target.value)} />

            <button
                onClick={() => {
                    api.get(`/${book}%20${chapter}:${verse}?translation=almeida`)
                        .then((response) => setResult(response.data))
                        .catch((err) => {
                            console.error("ops! ocorreu um erro" + err);
                        });

                    console.log(result.verses[0].text);
                }}
            >
                Submit
            </button>
        </div>
    );
}

export default App;
