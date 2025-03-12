import React from "react";
import SearchContainer from "./Search/components/SearchContainer";
import Notes from "./Notes/components/index";
import useGlobalContext from "./Context/hooks/useGlobalContext";

const App = () => {
  const { allNotes } = useGlobalContext();

  return (
    <main className="main-container">
      <SearchContainer />

      <Notes>
        <Notes.Display>
          {(length) => {
            return length > 0 ? (
              <Notes.Grid>
                {allNotes.map((note) => (
                  <Notes.Item key={note.id} id={note.id}>
                    {note.title}
                  </Notes.Item>
                ))}
              </Notes.Grid>
            ) : (
              <Notes.Placeholder>
                <p>You don't have any Notes yet.</p>
              </Notes.Placeholder>
            );
          }}
        </Notes.Display>
      </Notes>
    </main>
  );
};

export default App;
