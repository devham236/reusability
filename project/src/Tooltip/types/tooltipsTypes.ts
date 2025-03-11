import { ReactNode } from "react";

export interface TooltipsButtonProps {
  children: (show: boolean) => ReactNode;
}

export interface TooltipsContainerProps {
  children: ReactNode;
}
