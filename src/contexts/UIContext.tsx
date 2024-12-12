import { createContext, useContext, useState } from "react";

interface UIContextProps {
  isFilterOpen: boolean;
  setIsFilterOpen: (isFilterOpen: boolean) => void;

  isPropertiesListOpen: boolean;
  setIsPropertiesListOpen: (isPropertiesListOpen: boolean) => void;
}

const UIContext = createContext<UIContextProps | undefined>(undefined);

export function UIContextProvider({ children }: { children: React.ReactNode }) {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isPropertiesListOpen, setIsPropertiesListOpen] =
    useState<boolean>(false);

  return (
    <UIContext.Provider
      value={{
        isFilterOpen,
        setIsFilterOpen,
        isPropertiesListOpen,
        setIsPropertiesListOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUIContext() {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error("useUIContext debe usarse dentro de UIContextProvider");
  }

  return context;
}
