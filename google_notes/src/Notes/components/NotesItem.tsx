import { ReactNode } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import useGlobalContext from "../../Context/hooks/useGlobalContext";

const NotesItem = ({
  children,
  id,
}: {
  children: ReactNode;
  id: number | string;
}) => {
  const { deleteNote } = useGlobalContext();
  return (
    <div className="notes-item">
      {children}
      <FaRegTrashCan className="delete-icon" onClick={() => deleteNote(id)} />
    </div>
  );
};

export default NotesItem;
