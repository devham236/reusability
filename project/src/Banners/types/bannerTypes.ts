import { Dispatch, SetStateAction } from "react";

export interface BannerContextType {
  variant: string;
  setVariant: Dispatch<SetStateAction<string>>;
}
