import React, { ReactNode } from "react";

const Tooltips = ({ children }: { children: ReactNode }) => {
  return <section className="section-container">{children}</section>;
};

export default Tooltips;
