import React, { ReactNode } from "react";
import "./styles/search.css";

const SearchContainer = ({ children }: { children: ReactNode }) => {
  return <section className="search-section">{children}</section>;
};

export default SearchContainer;
