"use client";
import { navLinks } from "@/lib/data";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
type activeSectionData = (typeof navLinks)[number]["name"];

type SectionContextProps = { children: ReactNode };
type ActiveContext = {
  activeSection: activeSectionData;
  setActiveSection: Dispatch<SetStateAction<activeSectionData>>;
};
export const ActiveSectionContext = createContext<ActiveContext | null>(null);

const SectionContextProvider = ({ children }: SectionContextProps) => {
  const [activeSection, setActiveSection] = useState<activeSectionData>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default SectionContextProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
