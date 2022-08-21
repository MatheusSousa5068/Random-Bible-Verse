import "./App.css";
import { useState } from "react";

function App() {
    const api = "https://bible-api.com/";
    const [book, setBook] = useState("");
    const [chapter, setChapter] = useState("");
    const [verse, setVerse] = useState("");

    return (
        <div className="App">
            <input type="text" onChange={(e) => setBook(e.target.value)} />
            <input type="text" onChange={(e) => setChapter(e.target.value)} />
            <input type="text" onChange={(e) => setVerse(e.target.value)} />

            <button onClick={() => {
              console.log(api + "%20")
            }}>Submit</button>
        </div>
    );
}

export default App;
