import React, { ReactNode } from "react";

const Badges = ({ children }: { children: ReactNode }) => {
  return <section className="section-container">{children}</section>;
};

export default Badges;
