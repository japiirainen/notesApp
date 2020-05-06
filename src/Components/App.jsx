import React from "react";
import notes from "../notes";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <div>
        {notes.map((val) => (
          <Note key={val.key} title={val.title} content={val.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
