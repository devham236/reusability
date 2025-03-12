import React, { FormEvent, useEffect, useRef, useState } from "react";
import useGlobalContext from "../../Context/hooks/useGlobalContext";

const SearchInput = ({ children }: { children: string }) => {
  const [noteText, setNoteText] = useState("");
  const { addNote } = useGlobalContext();
  const inputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    const randomId = Number(crypto.randomUUID());
    event.preventDefault();
    addNote({ id: randomId, title: noteText });
    setNoteText("");
  }

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <form onSubmit={(e) => submitHandler(e)} className="search-input-container">
      <input
        type="text"
        name=""
        id=""
        ref={inputRef}
        value={noteText}
        placeholder={children}
        onChange={(e) => setNoteText(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
