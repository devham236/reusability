import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};

export default useGlobalContext;
