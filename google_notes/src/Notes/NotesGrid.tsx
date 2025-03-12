import React, { ReactNode } from "react";

const NotesGrid = ({ children }: { children: ReactNode }) => {
  return <div className="notes-grid">{children}</div>;
};

export default NotesGrid;
