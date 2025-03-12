import React, { ReactNode } from "react";
import useGlobalContext from "../Context/hooks/useGlobalContext";

const NotesDisplay = ({
  children,
}: {
  children: (noteCount: number) => ReactNode;
}) => {
  const { allNotes } = useGlobalContext();
  return <>{children(allNotes.length)}</>;
};

export default NotesDisplay;
