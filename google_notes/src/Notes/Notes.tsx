import React, { ReactNode } from "react";

const Notes = ({ children }: { children: ReactNode }) => {
  return <section className="notes-section">{children}</section>;
};

export default Notes;
