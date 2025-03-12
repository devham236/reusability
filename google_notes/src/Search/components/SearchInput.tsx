import React, { FormEvent, useEffect, useRef, useState } from "react";
import useGlobalContext from "../../Context/hooks/useGlobalContext";

const SearchInput = ({ children }: { children: string }) => {
  const [noteText, setNoteText] = useState("");
  const { addNote } = useGlobalContext();
  const inputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addNote({ id: Number(crypto.randomUUID()), title: noteText });
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
        placeholder={children}
        onChange={(e) => setNoteText(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
