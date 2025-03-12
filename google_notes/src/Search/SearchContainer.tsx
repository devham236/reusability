import React, { ReactNode } from "react";

const SearchContainer = ({ children }: { children: ReactNode }) => {
  return <section className="search-section">{children}</section>;
};

export default SearchContainer;
