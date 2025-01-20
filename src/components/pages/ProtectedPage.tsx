// import PageLayout from "./PageLayout";

// const ProtectedPage: React.FC = () =>{
//     return(
//         <PageLayout>
//             <h2>Protected Personal Notes</h2>
//         </PageLayout>
//     )
// }
// export default ProtectedPage;

import React, { useState, useEffect } from "react";
import PageLayout from "./PageLayout";

const ProtectedPage: React.FC = () => {
  const [notes, setNotes] = useState<string>(""); // Current textarea content
  const [allNotes, setAllNotes] = useState<string[]>([]); // All submitted notes

  // Load saved notes from localStorage on initial render
  useEffect(() => {
    const savedNotes = localStorage.getItem("userNotes");
    if (savedNotes) {
      setAllNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("userNotes", JSON.stringify(allNotes));
  }, [allNotes]);

  // Handle textarea changes
  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value);
  };

  // Submit the current note
  const handleSubmit = () => {
    if (notes.trim()) {
      setAllNotes([...allNotes, notes]);
      setNotes(""); // Clear textarea after submission
    }
  };

  // Reset the textarea without affecting all notes
  const handleReset = () => {
    setNotes("");
  };

  // Clear all notes and localStorage
  const clearNotes = () => {
    setNotes("");
    setAllNotes([]);
    localStorage.removeItem("userNotes");
  };

  return (
    <PageLayout>
      <h2>Protected Personal Notes</h2>
      <div style={{ textAlign: "center" }}>
        <textarea
            value={notes}
            onChange={handleNotesChange}
            placeholder="Write your personal notes here..."
            rows={10}
            style={{ width: "80%", textAlign: "center" }}
        />
      </div>
      <div style={{ marginTop: "10px", margin: "0 15%" }}>
        <button onClick={handleSubmit} style={{ marginRight: "10px" }}>
          Submit
        </button>
        <button onClick={handleReset} style={{ marginRight: "10px" }}>
          Reset
        </button>
        <button onClick={clearNotes}>Clear Notes</button>
      </div>
      {allNotes.length > 0 && (
        <div style={{ marginTop: "20px", margin: "5% 15%", padding: "10px 50px", border: "1px solid #ccc", borderRadius: "10px" }}>
          <h3>Notes:</h3>
          <ul>
            {allNotes.map((note, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {note}
              </li>
            ))}
          </ul>
          <br />
        </div>
      )}
    </PageLayout>
  );
};

export default ProtectedPage;

