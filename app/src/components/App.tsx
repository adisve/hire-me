import { ReactNode } from "react";
import "./App.scss";

interface AppProps {
  children: ReactNode;
}

export const App = ({ children }: AppProps) => {
  return <main id="app">{children}</main>;
};
