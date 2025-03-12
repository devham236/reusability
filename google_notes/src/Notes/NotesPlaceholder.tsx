import React, { ReactNode } from "react";
import { FaRegBell } from "react-icons/fa6";

const NotesPlaceholder = ({ children }: { children: ReactNode }) => {
  return (
    <div className="notes-placeholder">
      <FaRegBell className="placeholder-icon" />
      {children}
    </div>
  );
};

export default NotesPlaceholder;
