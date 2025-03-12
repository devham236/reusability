import { Dispatch, SetStateAction } from "react";

const exampleNote = {
  id: 3,
  title: "lorem ipsum",
};

export type Note = typeof exampleNote;

export interface GlobalContextType {
  allNotes: Note[];
  setAllNotes: Dispatch<SetStateAction<Note[]>>;
  addNote: (note: Note) => void;
  deleteNote: (noteId: number) => void;
  updateNote: (newValue: string, noteId: number) => void;
}
