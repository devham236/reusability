import React, { ReactElement, useContext, useEffect, useState } from "react";
import { BannerContext } from "./Banners";
import {
  IoIosCheckmarkCircle,
  IoIosWarning,
  IoIosCloseCircle,
  IoIosInformationCircle,
} from "react-icons/io";

const Banner = () => {
  const [icon, setIcon] = useState<ReactElement>();
  const { variant } = useContext(BannerContext);

  function setBannerIcon() {
    switch (variant) {
      case "success":
        return <IoIosCheckmarkCircle />;
      case "warning":
        return <IoIosWarning />;
      case "error":
        return <IoIosCloseCircle />;
      case "neutral":
        return <IoIosInformationCircle />;
      default:
        break;
    }
  }

  useEffect(() => {
    setIcon(setBannerIcon());
  }, [variant]);

  return (
    <div className={`banner ${variant}`}>
      <h3>{variant[0].toUpperCase() + variant.slice(1)}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores
        iusto aspernatur exercitationem nostrum placeat dolore earum alias.
        Vitae praesentium nisi nam quidem quibusdam aperiam, dicta et enim
        doloribus. Totam!
      </p>
      {icon}
    </div>
  );
};

export default Banner;
