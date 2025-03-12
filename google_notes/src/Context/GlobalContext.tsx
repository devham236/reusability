import { createContext, ReactNode, useEffect, useState } from "react";
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

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await fetch("/publicNotes.json");
        const data = await res.json();
        setAllNotes(data);
      } catch (error) {
        return error;
      }
    }

    fetchNotes();
  }, []);

  function addNote(note: Note) {
    setAllNotes((prev) => [...prev, note]);
  }

  function deleteNote(noteId: number | string) {
    const filteredArray = allNotes.filter((note: Note) => note.id !== noteId);
    setAllNotes(filteredArray);
  }

  function updateNote(newValue: string, noteId: number) {
    setAllNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, title: newValue } : note
      )
    );
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
