import React, { ReactNode, createContext, useState } from "react";
import { BannerContextType } from "../types/bannerTypes";

export const BannerContext = createContext<BannerContextType>({
  variant: "success",
  setVariant: () => {},
});

const Banners = ({ children }: { children: ReactNode }) => {
  const [variant, setVariant] = useState("neutral");

  return (
    <BannerContext.Provider value={{ variant, setVariant }}>
      <section className="section-container">{children}</section>
    </BannerContext.Provider>
  );
};

export default Banners;
