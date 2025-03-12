import React, { ReactNode } from "react";

const SearchInput = ({ children }: { children: ReactNode }) => {
  return (
    <form
      onSubmit={() => console.log("test")}
      className="search-input-container"
    >
      {children}
    </form>
  );
};

export default SearchInput;
