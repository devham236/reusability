import React, { ReactNode } from "react";

const SearchInput = ({ children }: { children: ReactNode }) => {
  return (
    <div className="search-input-container">
      <input type="text" name="" id="" placeholder="New Note..." />
    </div>
  );
};

export default SearchInput;
