import React, { createContext, ReactNode, useState } from "react";
import { GlobalContextType, Note } from "./types/contextTypes";

const GlobalContext = createContext<GlobalContextType>({
  allNotes: [],
  setAllNotes: () => {},
  addNote: () => {},
  deleteNote: () => {},
  updateNote: () => {},
});

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [allNotes, setAllNotes] = useState<Note[]>([]);

  function addNote(note: Note) {
    setAllNotes((prev) => [...prev, note]);
  }

  function deleteNote(noteId: number) {
    const filteredArray = allNotes.filter((note: Note) => note.id !== noteId);
    setAllNotes(filteredArray);
  }

  function updateNote(newValue: string, noteId: number) {
    const matchingNote = allNotes.find((prev: Note) => prev.id === noteId);
  }

  return (
    <GlobalContext.Provider
      value={{ allNotes, setAllNotes, addNote, deleteNote, updateNote }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
