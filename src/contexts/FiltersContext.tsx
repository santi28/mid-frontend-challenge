import { createContext, useContext, useEffect, useState } from "react";
import { usePropertiesContext } from "./PropertiesContext";

export interface Filters {
  name?: string;
  address?: string;
  type?: "house" | "apartment" | "land" | "office";
  availability?: "sale" | "rent";
}

interface FiltersContextProps {
  localFilters: Filters;
  setLocalFilters: (filters: Partial<Filters>) => void;
  applyFilters: () => void;
}

const initialState: FiltersContextProps = {
  localFilters: {},
  setLocalFilters: () => {},
  applyFilters: () => {},
};

const FiltersContext = createContext<FiltersContextProps>(initialState);

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const { setFilters } = usePropertiesContext();

  const [localFilters, setLocalFiltersState] = useState<Filters>({});
  const applyFilters = () => setFilters(localFilters);

  useEffect(() => console.log(localFilters), [localFilters]);

  return (
    <FiltersContext.Provider
      value={{
        localFilters,
        setLocalFilters: setLocalFiltersState,
        applyFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
