"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { CalendlyModal } from "./CalendlyModal";

interface CalendlyContextValue {
  open: () => void;
}

const CalendlyContext = createContext<CalendlyContextValue>({ open: () => {} });

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CalendlyContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <CalendlyModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  return useContext(CalendlyContext);
}
