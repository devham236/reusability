import { Dispatch, SetStateAction } from "react";

export type Note = {
  id: number | string;
  title: string;
};

export interface GlobalContextType {
  allNotes: Note[];
  setAllNotes: Dispatch<SetStateAction<Note[]>>;
  addNote: (note: Note) => void;
  deleteNote: (noteId: number) => void;
  updateNote: (newValue: string, noteId: number) => void;
}
