import React, { ReactNode } from "react";

const NotesItem = ({ children }: { children: ReactNode }) => {
  return <div className="notes-item">{children}</div>;
};

export default NotesItem;
