import React, { ReactNode } from "react";

const SearchInput = ({ children }: { children: ReactNode }) => {
  function submitHandler() {}
  return (
    <form onSubmit={submitHandler} className="search-input-container">
      {children}
    </form>
  );
};

export default SearchInput;
