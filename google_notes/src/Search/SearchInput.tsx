import React, { ReactNode } from "react";

const SearchInput = ({ children }: { children: ReactNode }) => {
  return <div className="search-input-container">{children}</div>;
};

export default SearchInput;
