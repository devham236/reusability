import React, { ReactNode } from "react";
import "./styles/notes.css";

const Notes = ({ children }: { children: ReactNode }) => {
  return <section className="notes-section">{children}</section>;
};

export default Notes;
