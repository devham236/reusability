import React, { useEffect, useRef, useState } from "react";
import useGlobalContext from "../Context/hooks/useGlobalContext";

const SearchInput = ({ children }: { children: string }) => {
  const [noteText, setNoteText] = useState("");
  const { addNote } = useGlobalContext();
  const inputRef = useRef(null);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addNote({ id: Number(crypto.randomUUID()), title: noteText });
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={(e) => submitHandler(e)} className="search-input-container">
      <input
        type="text"
        name=""
        id=""
        ref={inputRef}
        placeholder={children}
        onChange={(e) => setNoteText(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
